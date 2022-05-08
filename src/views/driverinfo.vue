<template>
	<home-page>
		<div class="w-screen h-screen  items-center flex flex-col mt-12">
			<h1 class='text-xl text-primary mb-4 mt-10 font-bold'> Driver Check in </h1>
			<p class='text-primary mb-4'> Fill in the details to continue </p>

			<div>
				<div class="marker"></div>
				<div class="ping"></div>
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

body {
  background-color: #28140c;
}

.marker {
  width: 8%;
  height: 8%;
  background-image: url('https://cdn.corbpie.com/assets/dot.svg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
}

.ping {
  width: 8%;
  height: 8%;
  background-image: url('https://cdn.corbpie.com/assets/dot.svg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  -webkit-animation: pulse 2s ease-out;
  -moz-animation: pulse 2s ease-out;
  animation: pulse 2s ease-out;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

@-moz-keyframes pulse {
  0% {
    -moz-transform: scale(1.1);
    opacity: 0.9;
  }
  10% {
    -moz-transform: scale(1.2);
    opacity: 0.8;
  }
  20% {
    -moz-transform: scale(1.3);
    opacity: 0.7;
  }
  30% {
    -moz-transform: scale(1.4);
    opacity: 0.6;
  }
  40% {
    -moz-transform: scale(1.5);
    opacity: 0.5;
  }
  50% {
    -moz-transform: scale(1.6);
    opacity: 0.4;
  }
  60% {
    -moz-transform: scale(1.7);
    opacity: 0.3;
  }
  70% {
    -moz-transform: scale(1.8);
    opacity: 0.2;
  }
  80% {
    -moz-transform: scale(1.9);
    opacity: 0.1;
  }
  90% {
    -moz-transform: scale(2);
    opacity: 0;
  }
  100% {
    -moz-transform: scale(2);
    opacity: 0;
  }
}
@keyframes pulse {
  0% {
    -moz-transform: scale(1.1);
    opacity: 0.9;
  }
  10% {
    -moz-transform: scale(1.2);
    opacity: 0.8;
  }
  20% {
    -moz-transform: scale(1.3);
    opacity: 0.7;
  }
  30% {
    -moz-transform: scale(1.4);
    opacity: 0.6;
  }
  40% {
    -moz-transform: scale(1.5);
    opacity: 0.5;
  }
  50% {
    -moz-transform: scale(1.6);
    opacity: 0.4;
  }
  60% {
    -moz-transform: scale(1.7);
    opacity: 0.3;
  }
  70% {
    -moz-transform: scale(1.8);
    opacity: 0.2;
  }
  80% {
    -moz-transform: scale(1.9);
    opacity: 0.1;
  }
  90% {
    -moz-transform: scale(2);
    opacity: 0;
  }
  100% {
    -moz-transform: scale(2);
    opacity: 0;
  }
}
</style>