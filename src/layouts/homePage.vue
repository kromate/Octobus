
<template>
	<loader/>


	<slot/>
	<bottom-nav v-if="bottom"/>
	<base-modal/>
	<alert-box/>
</template>

<script>
import BottomNav from '../components/BottomNav.vue'
import {useRouter} from 'vue-router'
import Loader from '../components/loader.vue'
import BaseModal from '../components/modal/BaseModal.vue'
import AlertBox from '../components/AlertBox.vue'
export default {
	components: { BottomNav, Loader, BaseModal, AlertBox },
	props:{
		bottom:{
			type:Boolean,
			default:true,
			required:false
		}
	},
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