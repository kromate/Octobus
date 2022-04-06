<template>
  <div :class="[ open ?'h-screen rounded-none top-0':'rounded-t-[40px]', 'px-6 z-50 fixed  py-4 bottom-14  inset-x-0 bg-white justify-between w-full animated open' ]" @click="toggleModal">
      <div :class="[ open?'hidden':'',  'w-20 h-1 rounded bg-gray mx-auto mb-6 open']"/>
      <p class="text-black text-xl font-semibold">Where do you want to go ?</p>
  <div>
       <select-menu  :people="services" @onChange="logChange" >
                <template #icon>
                   <i class="fa-solid fa-location-crosshairs text-primary text-2xl px-4  w-20"></i>
                </template>
               <li></li>
        </select-menu>
</div>
<div class="inputContainer">
    <i class="fa-solid fa-location-dot text-primary text-left text-2xl p-4 w-20"></i>
    <input v-model="userDestination" class="w-full rounded-xl p-3 bg-lightGray text-center text-gray mb-4 mt-2" placeholder="Where are you going?"  type="text" @change="displayRes">
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
    const services = ref([])

     onMounted(async () => {
      const response = await fetch("https://gist.githubusercontent.com/Abiola-Farounbi/40bad9f072180e595b9f2e6e99672527/raw/1f0450e07f263a782b6c277e613509a91d0b9359/services.json");
      services.value  = await response.json();
   })

    const toggleModal = (el)=>{
        if(el.target.className.includes('open')){
            open.value = !open.value
        }
    }

     const logChange = (e) =>  {
              console.log(e);
        }
    
    const displayRes = () => {
        console.log(userDestination.value)
    }

  

    return {
        open, toggleModal, userDestination, userLocation,services, logChange,displayRes
    }
}
}
</script>

<style scoped>
.animated{
transition: all 0.35s ease;
}
</style>