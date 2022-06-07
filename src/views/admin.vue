<template>
	<home-page>
		<div v-if="allowedUsers.includes(useUser().user.value.email)">
			<div class="mt-24 flex flex-col" v-if="useUser().user.value">
				<p class="text-3xl font-semibold text-center">Admin Panel</p>
				<p class="bg-primary text-white p-2 mx-auto px-24 mt-2">List of Users</p>
				<div class="p-3.5 bg-red-100 mt-3.5 rounded-md" v-for="n in UserResult" :key="n">
					<div class="flex items-center">
						<avatar  :name="n.email.split('@')[0]"  :size="64" class="mr-4"/>
						<div>
							<p class="bg-secondary text-white w-auto px-4 py-0.5 rounded mt-1" >{{n.email}}</p>
					
							<button class="btn-outline py-0.5 mt-2" @click="deleteUser(n.email)">Delete</button>
						
						</div>
			
					</div>
				</div>
			</div>

			<div v-else class="mt-36">
				<Vue3Lottie :animation-data="animation" :height="200" :width="200" />
				<p class="text-center">
					You need to sign in to view profile
				</p>
				<button class="btn  py-1 px-12 mx-auto mt-6"  @click="$router.push('/login')">
					Login
				</button>
			</div>
		</div>

		<div class="mt-36" v-else>
			<Vue3Lottie :animation-data="admin" :height="200" :width="200" :loop="false"/>
			<p class="text-center">
				Only admins have access to this page
			</p>
			<button class="btn  py-1 px-12 mx-auto mt-6"  @click="$router.push('/profile/contact')">
				contact an admin
			</button>
		</div>


	</home-page>
	
</template>

<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import animation from '@/assets/animation/auth.json'
import admin from '@/assets/animation/admin.json'
import { useUser } from '../composables/useGlobal'
import homePage from '../layouts/homePage.vue'
import {UserResult, getUsers} from '@/firebase/firestore' 
import { onMounted } from 'vue-demi'
import { useLoading } from '../composables/useNotification'
import Avatar from '@/components/Avatar.vue'


onMounted(getUsers)

console.log()
const allowedUsers = ['godwinjerry44@gmail.com', 'akpananthony33@gmail.com']

const deleteUser = (email)=>{
	useLoading().openLoading()
	fetch(`https://us-central1-octobus-1.cloudfunctions.net/deleteUser/?email=${email}`)
		.then((response) => response.json())
		.then((data) =>{
      	useLoading().closeLoading()
			console.log(data)
		} )

}

</script>


<style scoped>
body {
  position: relative;
  height: 100vh;
}
        
.wrapper {
  display: inline-block;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%,-50%)
}

.video-main {
  position: relative;
  display: inline-block;
}

.video {
  height: 70px;
  width: 70px;
  line-height: 70px;
  text-align: center;
  border-radius: 100%;
  background: transparent;
  color: #fff;
  display: inline-block;
  background: #000000;
  z-index: 999;
  font-size: 2rem;
}

@keyframes waves {
  0% {
    -webkit-transform: scale(0.2, 0.2);
    transform: scale(0.2, 0.2);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  }
  50% {
    opacity: 0.9;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
  }
  100% {
    -webkit-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  }
}

.fa-play:before {
  content: "\f04b";
}

.waves {
  position: absolute;
  width: 170px;
  height: 170px;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  border-radius: 100%;
  right: -50px;
  bottom: -50px;
  z-index: -1;
   -webkit-animation: waves 3s ease-in-out infinite;
  animation: waves 3s ease-in-out infinite;
}
        
.wave-1 {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

.wave-2 {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.wave-3 {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

</style>