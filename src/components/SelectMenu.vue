<!-- This example requires Tailwind CSS v2.0+ -->
<template>
	<Listbox v-model="selected" as="div" class=" max-w-[100vw] mt-7" >
  
		<div class="mt-1 relative">
			<ListboxButton
				class="relative w-full bg-lightGray  focus:ring-1 ring-secondary active:border border-secondary rounded-md shadow-sm pl-3 pr-10 py-3 text-left cursor-default
       focus:outline-none  sm:text-sm">
				<span class="flex items-center">
					<slot name='icon'/>
					<span  class="ml-3 block truncate text-primary">{{ selected || placeholder }}</span>
				</span>
				<span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
					<i class="fas fa-angle-down"></i>
				</span>
			</ListboxButton>

			<transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
				<ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
					<ListboxOption v-for="person in options" :key="person" v-slot="{ active, selected }" as="template" :value="person" >
						<li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
							<div class="flex items-center">
								<div  class="flex-shrink-0 h-6 w-6 rounded-full" />
								<span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
									{{ person }}
								</span>
							</div>
						</li>
					</ListboxOption>
				</ListboxOptions>
			</transition>
		</div>
	</Listbox>
</template>

<script>
import {  watch, ref, onMounted } from 'vue'
import { Listbox, ListboxButton,  ListboxOption, ListboxOptions } from '@headlessui/vue'


export default {
	components: {
		Listbox,
		ListboxButton,
		ListboxOption,
		ListboxOptions,
  
	},
	props: {
		options: {
			type:Array,
			required: true,
		},
	
		placeholder:{
			type:String,
			required: false,
		},
		load:{
			type:Boolean,
			required:false,
			default:true
		}
	},
	setup(props,context) {
		onMounted(()=>{
			if(props.load){
				selected.value = props.options[0]
			}
			
		})
		const selected = ref('')

		watch(selected, (curr)=>{
			context.emit('onChange', curr)
		})


		return {selected}
	},
}
</script>