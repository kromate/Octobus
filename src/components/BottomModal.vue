<template>
  <div :class="[ open ?'h-screen rounded-none top-0':'rounded-t-[40px]', 'px-6 z-50 fixed  py-4 bottom-14  inset-x-0 bg-white justify-between w-full animated open' ]" @click="toggleModal">
      <div :class="[ open?'hidden':'',  'w-20 h-1 rounded bg-gray mx-auto mb-6 open']"/>
      <p class="text-black text-xl font-semibold">Where do you want to go ?</p>
      <!-- <input v-model="userLocation" class="w-full rounded-xl p-3 bg-lightGray text-center  text-gray mt-4 mb-2" placeholder="Your Location"  type="text" > -->
  <div>
       <select-menu  v-model="userLocation" >
                <template #icon>
                   <i class="fa-solid fa-location-crosshairs text-primary text-2xl px-4  w-20"></i>
                </template>
               <li></li>
        </select-menu>
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
import { ref,onMounted } from 'vue'
import SelectMenu from './SelectMenu.vue'

export default {
Name: "BottomModal",
components:{ SelectMenu },

setup(){
    
    const userLocation = ref()
    const userDestination = ref()
    const open = ref(false)

    const toggleModal = (el)=>{
        if(el.target.className.includes('open')){
            open.value = !open.value
        }
    }

   onMounted(async () => {
       
      const response = await fetch("https://gist.githubusercontent.com/Abiola-Farounbi/40bad9f072180e595b9f2e6e99672527/raw/da3537825871de9fe4a0ed94204ef680c252b6cf/services.json");
    const json = await response.json();
        console.log(json);
   })

    return {
        open, toggleModal, userDestination, userLocation
    }
}
}
</script>

<style scoped>
.animated{
transition: all 0.35s ease;
}
</style>