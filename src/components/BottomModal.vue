<template>
	<transition name="slideDown">
		<div class="w-screen h-96 shadow-modal bg-white  z-40 fixed top-0 p-4" v-if="open">
			<div class="flex items-center">
				<i class="fas fa-times text-primary text-left text-2xl"></i>
				<p class="font-bold ml-8 text-xl">
					Select destination
				</p>
			</div>
		</div>

	</transition>
	<div :class="[ open ?'h-screen rounded-none top-0':'rounded-t-[4px]', 'px-3 z-30 fixed  py-4 bottom-12  inset-x-0 bg-white justify-between w-full animated ' ]" >
		<div :class="[ open?'hidden':'',  'w-14 h-1.5 rounded bg-gray mx-auto']"/>
	
		<div class="relative" @click="toggleModal">
			<i class="fas fa-search text-primary text-left text-lg w-8 h-8 bg-[#b3b3bc80] rounded-full flex justify-center items-center absolute top-2.5 left-3"></i>
			<div  class="w-full rounded-md p-3 bg-lightGray pl-14  mt-4 mb-2 font-bold" > Where to ?</div>
		</div>

	
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'


export default {
	Name: 'BottomModal',

	setup(){
		const open = ref(false)
		const toggleModal = ()=>{
			console.log(open.value)
			// if(el.target.className.includes('open')){
			open.value = !open.value
			// }
		}

		return {
			open, toggleModal
		}
	}
}
</script>

<style scoped>
.animated{
transition: all 0.35s ease;
}
</style>