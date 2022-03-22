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
</template>

<script>
export default {
name:"LandingPage"
}
</script>

<style scoped>
.bg{
background:  rgba(0, 0, 0, 0.5) url('../assets/buses.png');
background-blend-mode: darken;
}
</style>