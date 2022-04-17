<template>
	<div :class="[ open ?'h-screen rounded-none top-0':'rounded-t-[4px]', 'px-3 z-50 fixed  py-4 bottom-14  inset-x-0 bg-white justify-between w-full animated open' ]" @click="toggleModal">
		<div :class="[ open?'hidden':'',  'w-20 h-1 rounded bg-gray mx-auto mb-1 open']"/>
	
		<div class="">
			<i class="fas fa-search text-primary text-left text-lg w-8 h-8 bg-gray rounded-full flex justify-center items-center absolute top-12 left-6"></i>
			<div  class="w-full rounded-xl p-3 bg-lightGray pl-14  mt-4 mb-2" type="text" > Where to?</div>
		</div>

	
	</div>
</template>

<script>


export default {
	Name: 'BottomModal',

	setup(){

	
	}
}
</script>

<style scoped>
.animated{
transition: all 0.35s ease;
}
</style>