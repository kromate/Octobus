<template>
  <div :class="[ open ?'h-screen rounded-none top-0':'rounded-t-[40px]', 'px-6 z-50 fixed  py-4 bottom-14  inset-x-0 bg-white justify-between w-full animated open' ]" @click="toggleModal">
      <div :class="[ open?'hidden':'',  'w-20 h-1 rounded bg-gray mx-auto mb-6 open']"/>
      <p class="text-black text-xl font-semibold">Where do you want to go ?</p>
  <div class="inputContainer">
   <i class="fa-solid fa-location-crosshairs text-primary text-left text-2xl px-4 pt-6 w-20"></i>
   <input v-model="userLocation" class="w-full rounded-xl p-3 bg-lightGray text-center  text-gray mt-4 mb-2" placeholder="Your Location"  type="text" >
</div>
<div class="inputContainer">
    <i class="fa-solid fa-location-dot text-primary text-left text-2xl p-4 w-20"></i>
    <input v-model="userDestination" class="w-full rounded-xl p-3 bg-lightGray text-center text-gray mb-4 mt-2" placeholder="Where are you going?"  type="text" >
</div>
<div class="inputContainer" :class="[ open?'':'hidden',]">
   <button class=" bg-black btn w-full !text-white mt-10">
       Search
   </button>
</div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
Name: "BottomModal",

setup(){
    const open = ref(false)

    const toggleModal = (el)=>{
        if(el.target.className.includes('open')){
            open.value = !open.value
        }
    }

    return {
        open, toggleModal
    }
}
}
</script>

<style scoped>
.animated{
transition: all 0.35s ease;
}
</style>