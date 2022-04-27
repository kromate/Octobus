<template>
	<home-page>


		<div class="bg w-screen md:h-[40rem] h-[30rem] grid place-content-center place-items-center text-white text-center"> 
			<p class="md:text-2xl text-4xl">Near East University’s</p>
			<h2 class="md:text-6xl text-2xl px-2 mt-4">Bus Navigation System</h2>
			<button class="btn h-12 !bg-white !text-black mt-8">Get started</button>
		</div>

		<div class="gray flex flex-col justify-center items-center bg-secondary text-white md:h-[15rem] h-[10rem] text-center px-4">
			<h2 class="md:text-5xl text-2xl">Never miss a class with Octobus.</h2>
		</div>

		<div class="flex flex-col w-full justify-center items-center md:py-32 pt-36">
			<h2 class="text-center md:text-5xl text-3xl mb-16">How it works</h2>

			<div class="flex gap-8 md:flex-row md:flex-wrap flex-col justify-center items-center md:items-stretch">
				<div
					class="bg-blue max-w-[85%] md:rounded-xl rounded-lg md:w-[20%] min-w-[18rem] py-10 flex flex-col items-center justify-center gap-8 p-4 text-center"
				>
					<i class="fas fa-route text-secondary text-7xl"></i>
					<h5 class="font-bold text-lg text-secondary">Find bus routes</h5>
					<p class="text-sm">Find out the routes closest to your location and destination, so that you can always catch a bus to your destinaion.   </p>
				</div>
				<div
					class="bg-blue max-w-[85%] md:rounded-xl rounded-lg md:w-[20%] min-w-[18rem] py-10 flex flex-col items-center justify-center gap-8 p-4 text-center"
				>
					<i class="fas fa-calendar text-secondary text-7xl"></i>
					<h5 class="font-bold text-lg text-secondary">Check bus schedules</h5>
					<p class="text-sm">Check the date, time, route, start point and depature time of all available buses so you know when to board the right bus.   </p>
				</div>
				<div
					class="bg-blue max-w-[85%] md:rounded-xl rounded-lg md:w-[20%] min-w-[18rem] py-10 flex flex-col items-center justify-center gap-8 p-4 text-center"
				>
					<i class="fas fa-bell text-secondary text-7xl"></i>
					<h5 class="font-bold text-lg text-secondary">Set bus alerts</h5>
					<p class="text-sm">Set alerts to get notified before the depature of a bus so that you can always catch the bus on time.  </p>
				</div>
				<div
					class="bg-blue max-w-[85%] md:rounded-xl rounded-lg md:w-[20%] min-w-[18rem] py-10 flex flex-col items-center justify-center gap-8 p-4 text-center"
				>
					<i class="fas fa-comment text-secondary text-7xl"></i>
					<h5 class="font-bold text-lg text-secondary">Set bus alerts</h5>
					<p class="text-sm">Set alerts to get notified before the depature of a bus so that you can always catch the bus on time.  </p>
				</div>
			</div>
		</div>

		<div class="bg2 w-screen md:h-[40rem] h-[30rem] grid place-content-center place-items-center text-white text-center"> 
			<h2 class="md:text-6xl text-3xl px-3">Navigating campus has never been easier</h2>
			<p class="md:text-2xl text-lg px-3 mt-5">You can always find a bus to take you to your destination from anywhere you are.</p>
			<button class="btn h-12 !bg-white !text-black mt-8">Get started</button>
		</div>

	
		<div class="flex flex-col w-full justify-center items-center md:py-32 pt-36">
			<h2 class="text-center md:text-5xl text-3xl mb-16">Gallery</h2>

			<carousel  >
				<slide  key="1">
					<img src="../assets/buses.png" alt="" class="w-[95%] h-[30rem] rounded-md   object-cover">
				</slide>
				<slide  key="2">
					<img src="../assets/buses3.png" alt="" class="w-[95%] h-[30rem]  rounded-md   object-cover">
				</slide>
				<slide  key="2">
					<img src="../assets/buses4.png" alt="" class="w-[95%] h-[30rem]  rounded-md   object-cover">
				</slide>

				<template #addons>
					<!-- <navigation /> -->
					<pagination />
				</template>
			</carousel>
		</div>


		<div class="flex flex-col w-full justify-center items-center md:py-32 pt-36">
			<h2 class="text-center md:text-5xl text-3xl mb-16">What students say</h2>

			<div class="flex gap-8 md:flex-wrap md:flex-row flex-col justify-center items-center">
				<div
					class="bg-blue max-w-[85%] md:rounded-[2rem] rounded-lg w-[25.375rem] h-[21.9375rem] flex flex-col items-center justify-center gap-8 p-8 text-center"
				>
					<img src="../assets/people/1.png" class="h-16 w-16 rounded-full text-secondary"/>
					<h5 class="font-bold text-2xl">Christina Campbell</h5>
					<p class="text-lg">I set an alert for morning buses. It is super helpful to be reminded when they are leaving before they leave.  </p>
				</div>
				<div
					class="bg-blue max-w-[85%] md:rounded-[2rem] rounded-lg w-[25.375rem] h-[21.9375rem] flex flex-col items-center justify-center gap-8 p-8 text-center"
				>
					<img src="../assets/people/2.png" class="h-16 w-16 rounded-full text-secondary"/>
					<h5 class="font-bold text-2xl">Lekan Peiter</h5>
					<p class="text-lg">I have been able to catch the bus on the road so many times just by being on the same route. Always a great help.  </p>
				</div>
				<div
					class="bg-blue max-w-[85%] md:rounded-[2rem] rounded-lg w-[25.375rem] h-[21.9375rem] flex flex-col items-center justify-center gap-8 p-8 text-center"
				>
					<img src="../assets/people/3.png" class="h-16 w-16 rounded-full text-secondary"/>
					<h5 class="font-bold text-2xl">Lenny Vilha</h5>
					<p class="text-lg">I have been able to plan my daily schedule with the bus schedules. I get around campus easily now.  </p>
				</div>
			</div>
		</div>

		<div class="flex flex-col w-full justify-center items-center md:py-12 pt-12">
			<h1 class="text-5xl mb-6">FAQs</h1>
			<div class="flex flex-col  w-full justify-center items-center">
		
			
				<details class="max-w-[85%] bg-blue rounded-xl mt-5 w-[55rem]">
					<summary class="flex items-center  p-5  max-w-[100%]   font-bold text-lg">Are the buses available at all hours?
						<button class="ml-auto">
							<svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
						</button>
					</summary>
					<div class="mt-4 leading-normal text-sm px-6 mb-8 ">No, Check the school official website to find out more</div>
				</details>
				<details class="max-w-[85%] bg-blue rounded-xl mt-5 w-[55rem]">
					<summary class="flex items-center  p-5  max-w-[100%]   font-bold text-lg"> Who can benefit from Near East University shuttle services? 
						<button class="ml-auto">
							<svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
						</button>
					</summary>
					<div class="mt-4 leading-normal text-sm px-6 mb-8 ">All of our students who are registered to our university, have a current student certificate or a student ID with a semester stamp on it can use our university services.</div>
				</details>
				<details class="max-w-[85%] bg-blue rounded-xl mt-5 w-[55rem]">
					<summary class="flex items-center  p-5  max-w-[100%]   font-bold text-lg"> Are shuttle services paid? 
						<button class="ml-auto">
							<svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
						</button>
					</summary>
					<div class="mt-4 leading-normal text-sm px-6 mb-8 ">The school provides free shuttle service for its students.</div>
				</details>
			</div>
		
		</div>

		<footer class="w-full bg-blue md:p-24 p-8 mt-12">
			<div class="w-full flex flex-wrap gap-10 justify-between items-start mx-auto">
				<div class="flex flex-col">
					<h2 class="logo text-secondary text-2xl font-extrabold">
						Octobus
					</h2>
					<p>Nicosia, Cyprus.</p>
					<p>tel: +90 000 0CT 0BUS</p>
					<p>email: octobus@gmail.com</p>
				</div>
				<div class="flex flex-col">
					<h2 class="logo  text-lg font-extrabold">
						Company
					</h2>
					<p>FAQs</p>
					<p>Privacy Policy</p>
					<p>Terms and Conditions</p>
				</div>
				<div class="flex flex-col">
					<h2 class="logo  text-lg font-extrabold">
						Partners
					</h2>
					<p>Near East University</p>
					<p>Cyprus International University</p>
					<p>University of Cyprus</p>
				</div>
			</div>
		</footer>
	</home-page>
</template>

<script>
import HomePage from '../layouts/homePage.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
	components: { HomePage, Carousel, Slide, Pagination, Navigation },
	name:'LandingPage',
	setup(){
		const getImageUrl = (name) => {
			return new URL(name, import.meta.url).href
		}

		const gallery = [
			'../assets/buses.png', '../assets/buses2.png'
		]
		return{
			getImageUrl, gallery
		}
	}
}
</script>

<style scoped>
.bg{
background:  rgba(0, 0, 0, 0.3) url('../assets/buses.png');
background-blend-mode: darken;
}
.bg2{
background:  rgba(0, 0, 0, 0.3) url('../assets/buses2.png');
background-blend-mode: darken;
}



.carousel__slide {
  padding: 5px;
/* width: 480px !important; */
/* height: 480px !important; */
}



</style>