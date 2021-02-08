<template>
   <form @submit.prevent="handleSubmit">
      <h3>Sign Up</h3>
      <input type="text" placeholder="Display Name" v-model="displayName" required>
      <input type="email" placeholder="Email" v-model="email" required>
      <input type="password" placeholder="Password" v-model="password" required>
      <div class="error">{{error}}</div>
      <button v-if="!isPending">Sign up</button>
      <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
import useSignup from '@/composables/useSignup'
import {useRouter} from 'vue-router'
import { ref } from 'vue'
export default {
    setup(){
        const router = useRouter()
        const { error, signup, isPending } = useSignup()
        const email = ref('')
        const password=ref('')
        const displayName=ref('')

        const handleSubmit=async()=>{
            const res = await signup(email.value, password.value, displayName.value)
            if(!error.value){
                router.push({name:'UserPlaylists'})
            }
            
        }

        return {
            email,
            password,
            displayName,
            isPending,
            handleSubmit,
            error,
        }
    }
}
</script>

<style>

</style>