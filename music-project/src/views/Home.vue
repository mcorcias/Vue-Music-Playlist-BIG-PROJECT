<template>
  <div class="home">
   <p>Homepage</p>
   <div v-if="documents">
      <ListView :playlists="documents" />
   </div>
   <div v-if="error" class="error">{{error}}</div>
  </div>
</template>

<script>
import ListView from '../components/ListView.vue'
import getCollection from '@/composables/getCollection'

export default {
  name: 'Home',
  components: { ListView },
  setup(){
    const {error, documents} = getCollection('playLists')

    return {error, documents}

  }
}
</script>
