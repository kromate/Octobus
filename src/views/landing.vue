<template>
  <div class="nav flex mx-auto container justify-between items-center h-[80px] p-4"> 
    <h2 class="logo text-secondary text-2xl font-extrabold">
      Octobus
    </h2>

    <div class="flex gap-5">
      <button class="btn h-12">Sign Up</button>
      <button class="btn-outline h-12"> Log In</button>
    </div>
  </div>
  <div class="bg w-screen h-[40rem] grid place-content-center place-items-center text-white "> 
      <p class="text-2xl">Near East University’s</p>
      <h2 class="text-6xl">Bus Navigation System</h2>
          <button class="btn h-12 !bg-white !text-black mt-8">Get started</button>
  </div>

  <div class="gray flex flex-col justify-center items-center bg-blue h-[15rem]">
<h2 class="text-4xl">Never miss a class with Octobus.</h2>
<p class="text-lg mt-4">Stay up to date on all available buses and routes.</p>
  </div>

  <div class="flex flex-col w-full justify-center items-center py-32">
    <h2 class="text-center text-5xl mb-16">How it works</h2>

    <div class="flex gap-8">
      <div
v-for="n in [
      {img:'../assets/icons/route.svg', name:'Find bus routes', details:'Find out the routes closest to your location and destination, so that you can always catch a bus to your destinaion.'},
      {img:'../assets/icons/date.svg', name:'Check bus schedules', details:'Check the date, time, route, start point and depature time of all available buses so you know when to board the right bus.'},
      {img:'../assets/icons/add_bell.svg', name:'Set bus alerts', details:'Set alerts to get notified before the depature of a bus so that you can always catch the bus on time.'},
      
      ]"
      :key="n.img" 
      class="bg-blue rounded-[2rem] w-[25.375rem] h-[21.9375rem] flex flex-col items-center justify-center gap-8 p-8 text-center"
      >
        <img :src="getImageUrl(n.img)" class="h-12 w-12 text-secondary"/>
        <h5 class="font-bold text-2xl">{{n.name}}</h5>
        <p class="text-lg">{{n.details}}   </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:"LandingPage",
setup(){
const getImageUrl = (name) => {
        return new URL(name, import.meta.url).href
    }
  return{
getImageUrl
  }
}
}
</script>

<style scoped>
.bg{
background:  rgba(0, 0, 0, 0.5) url('../assets/buses.png');
background-blend-mode: darken;
}
</style>