
<template>
	<transition name="modal-fade">
		<div class="modal-backdrop fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
			<div class="bg-white shadow overflow-auto flex rounded-xl flex-col w-[90%] max-w-[31rem] p-4 md:p-4" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
				<header id="modalTitle" class="modal-header px-2 flex justify-between relative text-primary">
					<button
						type="button"
						class=" text-left text-gray text-sm"
						aria-label="Close modal"
						@click="close"
					>
						Cancel
					</button>
					<slot name="header" >
						<p class="text-lg font-bold">Alert me</p>
					</slot>

					<button
						type="button"
						class=" text-right text-gray text-sm"
						aria-label="Close modal"
					>
						Save
					</button>  
				</header>

				<section
					id="modalDescription" class="relative p-3">
					<div class='border rounded-xl '>
						<div class="alert-card px-6 ">
							<li class='list-none flex my-2'>  <img src="../assets/icons/clock.svg" class='mr-2'/> 6:45 </li>
							<li class='list-none flex my-2'> <img src="../assets/icons/route.svg" class='mr-2'/>  Regular Campuses </li>
							<li class='list-none flex my-2'> <i class="fa-solid fa-location-crosshairs text-primary mr-2"></i> Nicosia </li>
						</div>
					</div>
					<select-menu>
						<template #icon>
							<img src="../assets/icons/date.svg"/>
						</template>
					</select-menu>
					<select-menu>
						<template #icon>
							<i class="fa-solid fa-bell text-primary text-base"></i>
						</template>
					</select-menu>

				</section>


       
			</div>
		</div>
	</transition>
</template>

<script>
import SelectMenu from '../components/SelectMenu.vue'
export default {
	name: 'ModalComp',
	components:{
		SelectMenu
	},
	methods: {
		close() {
			this.$emit('close')
		},
	},
}
</script>

<style>
  .modal-backdrop {
    background-color: rgba(0, 0, 0, 0.3);
  }
  
  .modal-fade-enter-from,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .35s ease;
  }
</style>