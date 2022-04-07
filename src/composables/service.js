import { ref } from 'vue'

const data = ref({})
export function useService() {
      return { data }
}