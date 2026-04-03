import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Contract } from '@/types'

export const useContractsStore = defineStore('contracts', () => {
  const contracts = ref<Contract[]>([])
  const loading = ref(false)

  return { contracts, loading }
})
