<template>
	<div class="mt-16">
		<tab-group/>

		<select-menu placeholder='route'>
			<template #icon>
				<i class="fa-solid fa-location-dot text-primary text-base"></i>
			</template>
		</select-menu>
		<select-menu>
			<template #icon>
				<img src="../assets/icons/route.svg"/>
			</template>
		</select-menu>
		<select-menu>
			<template #icon>
				<img src="../assets/icons/date.svg"/>
			</template>
		</select-menu>
		<select-menu>
			<template #icon>
				<img src="../assets/icons/clock.svg"/>
			</template>
		</select-menu>
		<select-menu>
			<template #icon>
				<i class="fa-solid fa-bell text-primary text-base "></i>
			</template>
		</select-menu>



	</div>

</template>

<script>
import SelectMenu from '../components/SelectMenu.vue'
import TabGroup from '../components/TabGroup.vue'
export default {
	name:'AddAlertPage',
	components: { TabGroup, SelectMenu },
	setup(){

	}

}
</script>

<style>

</style>