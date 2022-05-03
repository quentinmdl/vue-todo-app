<script lang="ts">
import HeaderComponent from "@/components/base/Header.vue";
import FooterComponent from "@/components/base/Footer.vue";
import MessageComponent from "@/components/message/Message.vue";

import { defineComponent } from "vue";

import { settingStore } from "@/stores/setting";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    MessageComponent,
  },

  data() {
    return {
      showMessage: false,
      darkModeValue: false
    };
  },
});
</script>

<template>
  <HeaderComponent />
  <main id="page-content" class="container mx-auto py-8">
    <MessageComponent v-if="showMessage" />
    <RouterView />
  </main>
  <FooterComponent />
</template>

<style lang="scss">
@import "@/assets/base.css";
@import "@/assets/scss/_variable.scss";

#app {
  min-height: 100vh;
}

</style>
