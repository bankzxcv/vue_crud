import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"

export const useMainStore = defineStore({
  id: "navBar",
  state: () => ({
    enable: useStorage("collapseNav", false),
  }),
  getters: {
    get() {
      return this.enable
    },
  },
  actions: {
    toggle() {
      this.enable = !enable
    },
  },
})
