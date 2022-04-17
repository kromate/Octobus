<template>
	<transition name="slideDown">
		<div class="w-screen h-96 shadow-modal bg-white  z-40 fixed top-0 p-4" v-if="open">
			<div class="flex items-center">
				<i class="fas fa-times text-primary text-left text-2xl cursor-pointer" @click="toggleModal"></i>
				<p class="font-bold ml-8 text-xl">
					Select destination
				</p>
			</div>
			<div class="flex items-center mt-3 w-full">
				<div class="flex flex-col h-full items-center mr-3">
					<div class="border-[7px] border-green-800 rounded-full w-6 h-6"/>
					<div class="h-full min-h-[20px] border border-[#c6c2c2] w-0 my-0.5"/>
					<div class="border-[7px] border-red-800 rounded-full w-6 h-6"/>
				</div>
				<div class="flex flex-col w-full">
					<input type="text" placeholder="Your Location" class="input">
					<input type="text" placeholder="Search Location" class="mt-2 input">
				</div>
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