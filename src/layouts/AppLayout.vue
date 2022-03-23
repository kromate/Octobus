<template>
	<component :is="layout">
		<slot />
	</component>
</template>

<script lang="ts">
import homeLayout from './homePage.vue'
import addLayout from './addPageLayout.vue'
import defaultLayout from './defaultLayout.vue'
import { shallowRef, watch } from 'vue'
// @ts-ignore
import { useRoute } from 'vue-router'

const components = {
	homeLayout,
	addLayout,
	defaultLayout,
}

export default {
	name: 'AppLayout',
	components,
	setup () {
		const layout = shallowRef(homeLayout)
		const route = useRoute()
		watch(
			() => route.meta,
			async (meta) => {
				let layoutName = (meta.layout  || 'landing') + 'Layout'
				if (!components[layoutName]) layoutName = 'homeLayout'
				layout.value = components[layoutName]
			},
			{ immediate: true }
		)
		return { layout }
	}
}

</script>
