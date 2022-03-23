<template>
  <div class="nav flex mx-auto container justify-between items-center h-[80px] p-4"> 
    <h2 class="logo text-secondary text-2xl font-extrabold">
      Octobus
    </h2>

    <div class="md:flex gap-5 hidden ">
      <button class="btn h-12">Sign Up</button>
      <button class="btn-outline h-12"> Log In</button>
    </div>
  </div>
  <div class="bg w-screen md:h-[40rem] h-[30rem] grid place-content-center place-items-center text-white text-center"> 
      <p class="md:text-2xl text-4xl">Near East University’s</p>
      <h2 class="md:text-6xl text-3xl">Bus Navigation System</h2>
          <button class="btn h-12 !bg-white !text-black mt-8">Get started</button>
  </div>

  <div class="gray flex flex-col justify-center items-center bg-blue md:h-[15rem] h-[10rem] text-center px-4">
<h2 class="md:text-4xl text-2xl">Never miss a class with Octobus.</h2>
<p class="md:text-lg mt-4">Stay up to date on all available buses and routes.</p>
  </div>

  <div class="flex flex-col w-full justify-center items-center md:py-32 pt-36">
    <h2 class="text-center md:text-5xl text-2xl mb-16">How it works</h2>

    <div class="flex gap-8 md:flex-wrap md:flex-row flex-col justify-center items-center">
      <div
      class="bg-blue max-w-[80%] md:rounded-[2rem] rounded-lg w-[25.375rem] h-[21.9375rem] flex flex-col items-center justify-center gap-8 p-8 text-center"
      >
        <img src="../assets/icons/route.svg" class="h-12 w-12 text-secondary"/>
        <h5 class="font-bold text-2xl">Find bus routes</h5>
        <p class="text-lg">Find out the routes closest to your location and destination, so that you can always catch a bus to your destinaion.   </p>
      </div>
      <div
      class="bg-blue max-w-[80%] md:rounded-[2rem] rounded-lg w-[25.375rem] h-[21.9375rem] flex flex-col items-center justify-center gap-8 p-8 text-center"
      >
        <img src="../assets/icons/date.svg" class="h-12 w-12 text-secondary"/>
        <h5 class="font-bold text-2xl">Check bus schedules</h5>
        <p class="text-lg">Check the date, time, route, start point and depature time of all available buses so you know when to board the right bus.   </p>
      </div>
      <div
      class="bg-blue max-w-[80%] md:rounded-[2rem] rounded-lg w-[25.375rem] h-[21.9375rem] flex flex-col items-center justify-center gap-8 p-8 text-center"
      >
        <img src="../assets/icons/add_bell.svg" class="h-12 w-12 text-secondary"/>
        <h5 class="font-bold text-2xl">Set bus alerts</h5>
        <p class="text-lg">Set alerts to get notified before the depature of a bus so that you can always catch the bus on time.  </p>
      </div>
    </div>
  </div>

    <div class="gray flex flex-col justify-center items-center bg-secondary text-white h-[15rem]  text-center px-4 py-10 mt-12">
<h2 class="md:text-4xl text-2xl">Navigating university has never been easier</h2>
 <button class="btn h-12 !bg-white !text-secondary mt-8">Get started</button>
  </div>

    <div class="flex flex-col w-full justify-center items-center md:py-32 pt-36">
    <h2 class="text-center md:text-5xl text-2xl mb-16">What students say</h2>

    <div class="flex gap-8 md:flex-wrap md:flex-row flex-col justify-center items-center">
      <div
      class="bg-blue max-w-[90%] md:rounded-[2rem] rounded-lg w-[25.375rem] h-[21.9375rem] flex flex-col items-center justify-center gap-8 p-8 text-center"
      >
        <img src="../assets/icons/route.svg" class="h-12 w-12 text-secondary"/>
        <h5 class="font-bold text-2xl">Find bus routes</h5>
        <p class="text-lg">Find out the routes closest to your location and destination, so that you can always catch a bus to your destinaion.   </p>
      </div>
      <div
      class="bg-blue max-w-[90%] md:rounded-[2rem] rounded-lg w-[25.375rem] h-[21.9375rem] flex flex-col items-center justify-center gap-8 p-8 text-center"
      >
        <img src="../assets/icons/date.svg" class="h-12 w-12 text-secondary"/>
        <h5 class="font-bold text-2xl">Check bus schedules</h5>
        <p class="text-lg">Check the date, time, route, start point and depature time of all available buses so you know when to board the right bus.   </p>
      </div>
      <div
      class="bg-blue max-w-[90%] md:rounded-[2rem] rounded-lg w-[25.375rem] h-[21.9375rem] flex flex-col items-center justify-center gap-8 p-8 text-center"
      >
        <img src="../assets/icons/add_bell.svg" class="h-12 w-12 text-secondary"/>
        <h5 class="font-bold text-2xl">Set bus alerts</h5>
        <p class="text-lg">Set alerts to get notified before the depature of a bus so that you can always catch the bus on time.  </p>
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