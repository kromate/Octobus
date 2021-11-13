<template>
	<component :is="layout">
		<slot />
	</component>
</template>

<script lang="ts">
import landingLayout from './landingPage.vue'
import { shallowRef, watch } from 'vue'
// @ts-ignore
import { useRoute } from 'vue-router'

const components = {
	landingLayout,
}

export default {
	name: 'AppLayout',
	components,
	setup () {
		const layout = shallowRef(landingLayout)
		const route = useRoute()
		watch(
			() => route.meta,
			async (meta) => {
				let layoutName = (meta.layout  || 'landing') + 'Layout'
				if (!components[layoutName]) layoutName = 'landingLayout'
				layout.value = components[layoutName]
			},
			{ immediate: true }
		)
		return { layout }
	}
}

</script>
