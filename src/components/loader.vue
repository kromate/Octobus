<template>
	<transition name="fade" appear>
		<div v-if="active" class="fixed top-0 inset-0 z-[10] bg-[#ffffff96] flex justify-center items-center">
			<div class="loader"></div>
		</div>
	</transition>

</template>

<script>
import { useLoading } from '../composables/useNotification'
export default {
	name:'PageLoader',
	setup(){
        	const {active, message} = useLoading()
		return {active, message}
	}
}
</script>

<style scoped>
.fade-enter-from, .fade-leave-to{
opacity: 0;
}
.fade-enter-active, .fade-leave-active{
	transition: all .5s ease;
}
.loader {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent 40%, skyblue);
  animation: move 0.8s linear infinite;
}
.loader::before {
  position: absolute;
  content: "";
  top: 6px;
  left: 6px;
  right: 6px;
  bottom: 6px;
  background: rgba(78, 19, 19, 0.563);
  border-radius: 50%;
  z-index: 2;
}
.loader::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent 40%, skyblue);
  filter: blur(20px);
}
@keyframes move {
  to {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
}

</style>