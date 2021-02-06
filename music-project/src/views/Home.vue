<template>
  <div class="home">
   <p>Homepage</p>
   <div v-if="documents">
     <h1 v-for="doc in documents" :key="doc.id">{{doc.title}}</h1>
   </div>
   <div v-if="error" class="error">{{error}}</div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'

export default {
  name: 'Home',
  setup(){
    const {error, documents} = getCollection('playLists')

    return {error, documents}

  }
}
</script>
