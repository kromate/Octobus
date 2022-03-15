<template>
  <div class=" px-6 z-50 fixed bottom-0 pt-4 rounded-t-[40px] inset-x-0 bg-white justify-between w-full text-gray ">
      <p class="text-black text-2xl font-semibold">Where you want to go ?</p>
  <div class="inputContainer">
   <i class="fa-solid fa-location-crosshairs text-primary text-left text-2xl px-4 pt-6 w-20"></i>
   <input v-model="userLocation" class="w-full rounded-xl p-3 bg-lightGray text-center  text-gray mt-4 mb-2" placeholder="Your Location"  type="text" >
</div>
<div class="inputContainer">
    <i class="fa-solid fa-location-dot text-primary text-left text-2xl p-4 w-20"></i>
    <input v-model="userDestination" class="w-full rounded-xl p-3 bg-lightGray text-center text-gray mb-4 mt-2" placeholder="Where are you going?"  type="text" >
</div>
<div class="inputContainer">
    <i class="fa-solid fa-location-dot text-primary text-left text-2xl p-4 w-20"></i>
    <input v-model="userDestination" class="w-full rounded-xl p-3 bg-lightGray text-center text-gray mb-4 mt-2" placeholder="Where are you going?"  type="text" >
</div>
</div>
</template>

<script>
export default {
Name: "BottomModal"
}
</script>

<style>

</style>