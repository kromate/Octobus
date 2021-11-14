<template>
  <TabGroup :default-index="1">
    <TabList class="max-w-[100vw] bg-lightGray mx-4 rounded-xl mt-2">
      <Tab v-slot="{ selected }" as="template" class="w-1/2">
      <button  :class="[selected ? ' tab' : 'text-gray', 'w-1/2 bg-lightGray']">
          Dormitory
      </button>
      </Tab>
      <Tab v-slot="{ selected }" as="template" class="w-1/2">
      <button  :class="[selected ? ' tab' : 'text-gray', 'w-1/2']">
          Other Cities
      </button>
      </Tab>
    </TabList>
    <TabPanels>
      <!-- <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel> -->
    </TabPanels>
  </TabGroup>
</template>

<script>
//   import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import { TabGroup, TabList, Tab, TabPanels } from '@headlessui/vue'

  export default {
    components: {
      TabGroup,
      TabList,
      Tab,
      TabPanels,
    //   TabPanel,
    },
  }
</script>