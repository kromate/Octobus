<template>
	<div :class="[ open ?'h-screen rounded-none top-0':'rounded-t-[40px]', 'px-6 z-50 fixed  py-4 bottom-14  inset-x-0 bg-white justify-between w-full animated open' ]" @click="toggleModal">
		<div :class="[ open?'hidden':'',  'w-20 h-1 rounded bg-gray mx-auto mb-6 open']"/>
		<p class="text-black text-xl font-semibold">Where do you want to go ?</p>
		<!-- <div>
			<select-menu  :people="services" @onChange="logChange" >
				<template #icon>
					<i class="fa-solid fa-location-crosshairs text-primary text-2xl px-4  w-20"></i>
				</template>
				<li></li>
			</select-menu>
		</div> -->
        <div class="inputContainer">
            <i class="fa-solid fa-location-crosshairs text-primary text-left text-2xl px-4 pt-6 w-20"></i>
            <input v-model="userLocation" class="w-full rounded-xl p-3 bg-lightGray text-center  text-gray mt-4 mb-2" type="text" >
        </div>
		<div class="inputContainer">
			<i class="fa-solid fa-location-dot text-primary text-left text-2xl p-4 w-20"></i>
			<input v-model="userDestination" class="w-full rounded-xl p-3 bg-lightGray text-center text-gray mb-4 mt-2" placeholder="Where are you going?"  type="text" @change="displayRes">
		</div>
		<div class="inputContainer" :class="[ open?'':'hidden',]">
			<button class=" bg-black btn w-full !text-white mt-10" @click='getNearService'>
				Search
			</button>
		</div>
		<div class='my-8'>
			{{direction}}
		</div>
	</div>
</template>

<script>
import { ref,watch } from 'vue'
import SelectMenu from './SelectMenu.vue'
import { useService } from '../composables/service'

export default {
	Name: 'BottomModal',
	components:{ SelectMenu },

	setup(){

		const getService = (async () => {
			const response = await fetch('https://gist.githubusercontent.com/Abiola-Farounbi/40bad9f072180e595b9f2e6e99672527/raw/cf818692df2b4102186640625bab92504b18a990/services.json')
			services.value  = await response.json()
		})

		getService()

        const  {data} = useService();
		const userDestination = ref()
		const userLocation = ref()
		const open = ref(false)
		const services =ref([])
		const direction = ref('')
		const showAlert = ref(false)

		userLocation.value = 'Your Location'


		const getNearService = () =>{
	
			for(let x=0; x<services.value.length; x++){
				for(let y=0; y<services.value[x].routes.length; y++){
				   	if(userDestination.value == services.value[x].routes[y].name){
					direction.value = `This Bus service - ${services.value[x].name} would be passing that route`
				}
			}
			}
			if(direction.value == ''){
				direction.value = 'There is no available bus passing that route'
			}
	
			
		}

		const toggleModal = (el)=>{
			if(el.target.className.includes('open')){
				open.value = !open.value
			}
		}

		const logChange = (e) =>  {
            data.value = e

		}
                    
    

		return {
			data ,open, toggleModal, userDestination,userLocation, services, logChange,getNearService, direction
		}
	}
}
</script>

<style scoped>
.animated{
transition: all 0.35s ease;
}
</style>