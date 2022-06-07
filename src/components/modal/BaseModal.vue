<template>
	<div>
		<component :is="modal.elem" v-for="modal in allModals" :key="modal.elem.name" :show-modal="modal.state.value" :close="modal.close" />
	</div>
		

</template>

<script >

import {  globalModal } from '../../composables/useModal'

export default {
	name: 'ModalBase',
	setup () {
		const allModals = globalModal()
		return { allModals }
	}
}
</script>
