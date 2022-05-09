<template>
	<home-page>
		<div class="w-screen h-screen  items-center flex flex-col mt-12">
			<h1 class='text-xl text-primary mb-4 mt-10 font-bold'> Driver Check in </h1>
			<p class='text-primary mb-4'> Fill in the details to continue </p>

			<div>
				<div class="waves-block">
					<div class="waves wave-1"></div>
					<div class="waves wave-2"></div>
					<div class="waves wave-3"></div>
				</div>
			</div>


	
		</div>
	</home-page>
	
</template>

<script setup>
import homePage from '../layouts/homePage.vue'
import {useDriver} from '../composables/useDriver'
const {route} = useDriver.value

</script>


<style scoped>

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
  width: 150px;
  height: 150px;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
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