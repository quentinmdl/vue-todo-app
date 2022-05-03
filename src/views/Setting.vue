<template>
  <section id="setting">
    <div class="darkmode-form">
      <label>Light / Dark</label>
      <div class="darkmode-toggle" v-on:click="initDarkMode()">
        <div class="icons">
          <i class="fa-solid fa-sun"></i>
          <i class="fa-solid fa-moon"></i>
        </div>
        <span :class="darkModeValue ? 'switcher switcher-activated' : 'switcher'"></span>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";

import { settingStore } from "@/stores/setting";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "SettingView",
  components: {},

  setup() {
    const sSetting = settingStore();
    const { getDarkMode } = storeToRefs(sSetting);
    const { saveDarkMode } = sSetting;

    return { getDarkMode, saveDarkMode };
  },

  data() {
    return {
      darkModeValue: false
    }
  },

  mounted() {
    this.darkModeValue = this.getDarkMode;
  },

  methods: {
    setDarkMode() {
      this.darkModeValue = this.getDarkMode;
    },

    initDarkMode() {
      this.darkModeValue = !this.darkModeValue;
      this.saveDarkMode(this.darkModeValue);
      let mainLayout = document.querySelector("#app");
      let toggleSwitcher = document.querySelector(".darkmode-toggle .switcher");
      
      if(this.darkModeValue) {
        toggleSwitcher?.classList.add("switcher-activated");
        mainLayout?.classList.add("dark-theme");
      } else {
        toggleSwitcher?.classList.remove("switcher-activated");
        mainLayout?.classList.remove("dark-theme")
      }
    }


  },

  computed: {

  }

});
</script>

<style lang="scss">

#setting {
  .darkmode-form {
    display: flex;
    gap: 10px;
    
    .darkmode-toggle {
      width: 50px;
      border: 1px solid black;
      border-radius: 25px;
      // padding: 4px;
      background: lightgray;
      
      .icons {
        display: flex;
        justify-content: space-between;
        padding: 4px;
        opacity: 50%;
      }

      .switcher {
        position: absolute;
        background: white;
        width: 20px;
        border-radius: 25px;
        height: 19px;
        top: 2px;
        left: 3px;

      }
      .switcher-activated {
        left: unset;
        right: 3px;
      }
    }
  }
}


#app {
  &.dark-theme {
    background: black;
  }
}


</style>
