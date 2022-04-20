
<template>
	<loader/>
	<topbar />


	<slot/>
	<bottom-nav/>
	<base-modal/>
</template>

<script>
import BottomNav from '../components/BottomNav.vue'
import Topbar from '../components/Topbar.vue'
import {useRouter} from 'vue-router'
import Loader from '../components/loader.vue'
import BaseModal from '../components/modal/BaseModal.vue'
export default {
	components: { Topbar, BottomNav, Loader, BaseModal },
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