<template>



	<div class="px-4 pt-4 z-30 fixed bottom-[60px] rounded-2xl inset-x-0 bg-white justify-between w-full transition-all duration-500" >
		<div class="w-14 h-1.5 rounded bg-lightGray mx-auto"/>
		
		<transition name="slideUp" appear>
			<div class='bg-blue border text-primary font-bold py-4 rounded-lg mt-4' >
				<div class=" px-3 flex  items-center ">
					<div class='flex flex-col'>
						<div class="flex flex-col">
							<span class="mt-2">	Start: <b class=" text-green-900 font-normal ml-2">{{start}}</b> </span>
							<span class="mt-2"> Stops:<b class=" text-green-900 font-normal ml-2">{{stops}}</b> </span>
							<span class="mt-2">	End: <b class=" text-green-900 font-normal ml-2">{{end}}</b> </span>
						</div>
				
					</div>
				</div>
			</div>
		</transition>


		<div class="w-full py-6 gap-4 flex items-center">
			<button  class="btn-outline w-full "  >Bus stops</button>
			<button  class="btn w-full "  > schedules</button>
		</div>
		


	
	</div>
</template>

<script>
import { AllBusRoute } from '@/helpers/busRoutes'
import { computed } from '@vue/reactivity'

export default {
	Name: 'RouteModal',
	props:{
		route:{
			type:String,
			default:'',
			required:true
		}
	},
	setup(props){
		const len =  AllBusRoute[props.route].length
		const stops = len
		console.log(len)
		const start = computed({
			get:()=>{
				return AllBusRoute[props.route][0].name
			}
		})
		const end = computed({
			get:()=>{
				return AllBusRoute[props.route][len-1].name
			}
		})


		return {start, end, stops}
	}
}
</script>

<style scoped>


  .slideDown-enter-from,
  .slideDown-leave-to {
	transform: translateY(-300px)
  }

  .slideDown-enter-active,
  .slideDown-leave-active {
    transition: all 0.35s ease;
  }

  .slideUp-enter-from,
.slideUp-leave-to{
	transform: translateY(7rem);
	opacity: 0;
}

.slideUp-enter-active, .slideUp-leave-active{
	transition: all 0.35s ease;
}


</style>