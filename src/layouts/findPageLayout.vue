
<template>
  <topbar css-class="justify-between px-4">
    <span class="font-bold text-sm text-white cursor-pointer" @click="router.go(-1)">
      back
    </span>
    <span class="font-bold text-lg text-white" >
      Find Available Buses
    </span>
    <span class="font-bold text-sm text-white cursor-pointer" >
      next
    </span>

  
  </topbar>
  <slot/>
</template>

<script>
import Topbar from '../components/Topbar.vue'
import {useRouter} from 'vue-router'
export default {
  components: { Topbar },
    setup(){
    const router = useRouter()
    return{
      router
    }
  }

}
</script>

<style>

</style>