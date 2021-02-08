<template>
  <form @submit.prevent="handleSubmit">
      <h3>Login</h3>
      <input type="email" placeholder="Email" v-model="email" required>
      <input type="password" placeholder="password" v-model="password" required>
      <div class="error">{{error}}</div>
      <button v-if="!isPending">Log In</button>
      <button v-if="isPending" disabled>Loading</button>
      

  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../../composables/useLogin'
import {useRouter} from 'vue-router'
export default {
    setup(){
        const router = useRouter()
        const {error,login,isPending} = useLogin()
        const email = ref('')
        const password=ref('')

       const handleSubmit=async()=>{
           const res= await login(email.value,password.value)
           if(!error.value){
               router.push({name:'UserPlaylists'})
               email.value=''
               password.value=''
           }
       }

        return {email,password,handleSubmit,error,isPending}
    }
}
</script>

<style>

</style>