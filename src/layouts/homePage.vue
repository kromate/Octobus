
<template>
	<loader/>



	<slot/>
	<bottom-nav/>
	<base-modal/>
	<alert-box/>
</template>

<script>
import BottomNav from '../components/BottomNav.vue'
import Topbar from '../components/Topbar.vue'
import {useRouter} from 'vue-router'
import Loader from '../components/loader.vue'
import BaseModal from '../components/modal/BaseModal.vue'
import AlertBox from '../components/AlertBox.vue'
export default {
	components: { Topbar, BottomNav, Loader, BaseModal, AlertBox },
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