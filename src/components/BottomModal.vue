<template>
	<div :class="[ open ?'h-screen rounded-none top-0':'rounded-t-[40px]', 'px-6 z-50 fixed  py-4 bottom-14  inset-x-0 bg-white justify-between w-full animated open' ]" @click="toggleModal">
		<div :class="[ open?'hidden':'',  'w-20 h-1 rounded bg-gray mx-auto mb-6 open']"/>
		<p class="text-black text-xl font-semibold">Where do you want to go ?</p>
		<div>
			<select-menu  :people="services" @onChange="logChange" >
				<template #icon>
					<i class="fa-solid fa-location-crosshairs text-primary text-2xl px-4  w-20"></i>
				</template>
				<li></li>
			</select-menu>
		</div>
		<div class="inputContainer">
			<i class="fa-solid fa-location-dot text-primary text-left text-2xl p-4 w-20"></i>
			<input v-model="userDestination" class="w-full rounded-xl p-3 bg-lightGray text-center text-gray mb-4 mt-2" placeholder="Where are you going?"  type="text" @change="displayRes">
		</div>
		<div class="inputContainer" :class="[ open?'':'hidden',]">
			<button class=" bg-black btn w-full !text-white mt-10">
				Search
			</button>
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

		// const getService = (async () => {
		// 	const response = await fetch('https://gist.githubusercontent.com/Abiola-Farounbi/40bad9f072180e595b9f2e6e99672527/raw/1f0450e07f263a782b6c277e613509a91d0b9359/services.json')
		// 	services.value  = await response.json()
		// })

		// getService()

        const  {data} = useService();
		const userDestination = ref()
		const open = ref(false)
		const services = [
    {
        "name": "Nicosia Service-1",
        "routes":[
        {
            "name":"NEU Campus Main Station (8th Dormitory)",
        },
        {
            "name":"Near East Bank Stop",
        },
        {
            "name":"Honda Stop",
        },
        {
            "name":"Çangar Stop",
        },
        {
            "name":"Reis Supermarket Stop (opposite to Reis Supermarket)",
        },
        {
            "name":"Kaymaklı Old Cemetery Stop",
        },
        {
            "name":"City Royal Hotel Terminal Stop",
        },
        {
            "name":"NEU Faculty Of Law Stop",
        }
    ],
        "times": {
                "weekday": ["6:45","7:30","8:15","9:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15","20:15"],
                "weekend": ["6:45","8:15","9:15","10:15","11:15","12:15","13:15","14:15","15:15","17:15"]
            }
    },
    {
        "name": "Nicosia Service-2"
    },
    {
        "name":"Hamitköy Service"
    },
    {
        "name":"Kızılbaş Service"
    },
    {
        "name":"Gönyeli Service-1"
    },
    {
        "name":"Gönyeli Service-2" 
    },
    {
        "name": "Gönyeli / Metehan Service"
    },
    {
        "name": "Ortakoy / Yenikent Service Information"
    },
    {
        "name": "Kyrenia Service Information "
    },
    {
        "name": "Güzelyurt Service Information"
    },
    {
        "name":" Famagusta Service Information "
    }
]



		const toggleModal = (el)=>{
			if(el.target.className.includes('open')){
				open.value = !open.value
			}
		}

		const logChange = (e) =>  {
            data.value = e

		}
                    	// single ref
			
    
		const displayRes = () => {
			console.log(userDestination.value)
		}

  

		return {
			data ,open, toggleModal, userDestination, services, logChange,displayRes
		}
	}
}
</script>

<style scoped>
.animated{
transition: all 0.35s ease;
}
</style>