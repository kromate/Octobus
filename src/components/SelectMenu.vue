<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Listbox v-model="selected" as="div" class="mx-4 max-w-[100vw] mt-7">
  
    <div class="mt-1 relative">
      <ListboxButton
class="relative w-full bg-lightGray  focus:ring-1 ring-primary active:border rounded-md shadow-sm pl-3 pr-10 py-3 text-left cursor-default
       focus:outline-none  sm:text-sm">
        <span class="flex items-center">
          <slot name='icon'/>
          <span class="ml-3 block truncate text-gray">{{ selected.name }}</span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <img src="../assets/icons/selector.svg"/>
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption v-for="person in people" :key="person.id" v-slot="{ active, selected }" as="template" :value="person">
            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <div  class="flex-shrink-0 h-6 w-6 rounded-full" />
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                  {{ person.name }}
                </span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { ref } from 'vue'
import { Listbox, ListboxButton,  ListboxOption, ListboxOptions } from '@headlessui/vue'

const people = [
  {
    id: 1,
    name: 'Test 1',
    
  },
  {
    id: 2,
    name: 'Test 2',

  },
  {
    id: 3,
    name: 'Test 3',
 
  },
  {
    id: 4,
    name: 'Test 4',

  },
  {
    id: 5,
    name: 'Test 5',

  },

]

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  
  },
  setup() {
    const selected = ref(people[3])

    return {
      people,
      selected,
    }
  },
}
</script>