<template>
	<div :class="['bg-primary fixed z-10 top-0 inset-x-0 w-full h-12 min-h-[7vh] items-center flex', cssClass ]">
		<slot/>
	</div>
</template>

<script>
export default {
	name:'TobBar',
	props:{
		cssClass:{
			type:String,
			default:'',
			required:false
		}
	}
}
</script>
