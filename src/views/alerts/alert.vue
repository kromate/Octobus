<template>
 <div class="">
   
      <empty-state v-if="countAlert"/>
      <active-state v-else/>
  </div>
</template>

<script>
import emptyState from "./emptyState.vue";
import activeState from "./activeState.vue";
import {useStore} from "vuex";
import { computed} from 'vue'
export default {
 name:'AlertPage',
 components:{
   emptyState,
   activeState
 },
   setup() {
    const store = useStore();

    const countAlert = computed(() => {
       return  store.state.alerts.length == 0
    })
        
  return { countAlert}
   }

}
</script>

<style>

</style>