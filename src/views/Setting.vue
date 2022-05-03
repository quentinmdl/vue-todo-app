<template>
  <section id="setting">
    <div>
      <label for="toggle" class="theme-toggler settings-option" id="theme-toggler">Light / Dark</label>
      <input v-on:click="initDarkMode()" type="checkbox" id="toggle" v-model="darkModeValue"/>
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
      this.saveDarkMode(!this.darkModeValue);
      let mainLayout = document.querySelector("#app");
      console.log(mainLayout);
      if(!this.darkModeValue) {
        mainLayout?.classList.add("dark-theme");
      } else {
        mainLayout?.classList.remove("dark-theme")
      }
    }


  },

  computed: {

  }

});
</script>

<style lang="scss">

#app {
  &.dark-theme {
    background: black;
  }
}

// .theme-toggler__checkbox {
//   opacity: 0;
//   position: absolute;
//   right: 30px;
//   top: 25%;
//   z-index: 1; }

// .theme-toggler__label {
//   font-weight: normal;
//   font-size: 1.2em;
//   display: inline-block;
//   vertical-align: middle;
//   flex: 1;
//   margin-right: 2em; 
//   color:#35394b;
// }

// .theme-toggler__switch {
//   width: 50px;
//   height: 25px;
//   border-radius: 1em;
//   position: relative;
//   cursor: pointer;
//   background: #eee;
//   border: 2px solid #ddd;
//   transition: all .1s linear;
//   display: inline-block;
//   vertical-align: middle; 
  
// }

// .theme-toggler__switch::after {
//   content: "";
//   position: absolute;
//   width: 21px;
//   height: 21px;
//   margin-top: 0px;
//   margin-left: 1px;
//   border-radius: 1em;
//   background: #fff;
//   border: 1px solid #eee;
//   box-shadow: 2px 5px 10px -2px rgba(0, 0, 0, 0.2);
//   transition: all .1s linear; }

// .theme-toggler__checkbox:focus + .theme-toggler__switch {
//   box-shadow: 0 0 0 5px #fff, 0 0 0 7px orange;
//   outline: 3px solid transparent; }

// .theme-toggler__checkbox:focus:not(:focus-visible) + .theme-toggler__switch {
//   box-shadow: none; }

// .theme-toggler__checkbox:checked + .theme-toggler__switch {
//   background: #76D672;
//   border-color: #76D672; }

// .theme-toggler__checkbox:checked + .theme-toggler__switch::after {
//   transform: translatex(22px);
//   transition: transform .1s linear;
//   border-color: #fff; }

</style>
