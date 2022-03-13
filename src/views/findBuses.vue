<template>
<div class="mt-16 mx-4">
    <input class="w-full rounded-xl p-3 bg-lightGray text-gray my-4" placeholder="Your Location" type="text"  v-model="userLocation" >

    <input class="w-full rounded-xl p-3 bg-lightGray text-gray my-4" placeholder="Where are you going?" type="text"  v-model="userDestination" >

    <input class="w-full rounded-xl p-3 bg-lightGray text-gray my-4" placeholder="What time are you going?" type="text"  v-model="time" >

</div>

</template>

<script>

import { ref } from 'vue'

export default {
 name:'FindBuses',
  setup(){
    const userLocation = ref('')
    const userDestination = ref('')
    const time = ref(null)


return{ userLocation,userDestination,time}

  }

}
</script>

<style>

</style>