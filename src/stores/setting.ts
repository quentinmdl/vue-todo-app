import { defineStore } from "pinia";


export const settingStore = defineStore("settingStore", {
  state: () => ({
    darkMode: false,
  }),

  getters: {
    // Return dark mode value
    getDarkMode(state) {
      return state.darkMode;
    },
  },
  actions: {
    saveDarkMode(isActive: boolean) {
        this.darkMode = isActive;
    }
  }
});
