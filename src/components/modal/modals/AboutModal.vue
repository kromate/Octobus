<template>
	<Modal v-if="showModal">
		<div class="h-[500px] bg-white max-w-[79%]  min-w-[26.5rem] pt-9 pb-4 px-5 rounded-3xl ">
			<div class="flex flex-col w-full h-full justify-between">
				<div class="flex items-center justify-center w-full">
					<h2 class="font-semibold text-base text-center ml-auto">
						Create Virtual Account
					</h2>
					<div 	class="ml-auto cursor-pointer" @click="close">
						<Icon
							name="close"
							size="xsm"
						/>
					</div>
				</div>

				<div class="flex flex-col mt-14">
					<div class="select">
						<label for="1" class="font-bold text-sm"> Choose Currency</label>
						<t-select
							placeholder="Select an option"
							class="mt-2"
							:options="['Option A', 'Option B', 'Option C']"
							variant=""
						>
							<template slot="arrow" >
							
								<icon
									name="downArrow"
									size="s"
									class-name="ml-auto"
								/>
 
							</template>
						</t-select>
					</div>
					<div class="select mt-9">
						<label for="1" class="font-bold text-sm"> Bank</label>
						<t-select
							placeholder="Select an option"
							class="mt-2"
							:options="['Option A', 'Option B', 'Option C']"
							variant=""
						>
							<template slot="arrow" >
							
								<icon
									name="downArrow"
									size="s"
									class-name="ml-auto"
								/>
 
							</template>
						</t-select>
					</div>
				</div>
		

				<button class="btn bg-primary text-white self-end px-3  text-sm !py-3 mt-auto " @click="openCreateVirtualAccount()">
					Create Virtual Account
				</button>
	
		
			</div>
		</div>
	</Modal>
</template>

<script>

import Modal from '@/components/modal'

export default {
	name: 'AboutModal',
	components: { Modal },
	props:{
		showModal: {
			type: Boolean,
			required: true,
			default: false
		},
		close:{
			type: Function,
			required: true,
			default: ()=>{console.log('defaulter')}
		}
	},
	setup() {



	
		return {


		}
	}
}
</script>

<style>

</style>