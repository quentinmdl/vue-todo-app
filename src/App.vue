<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/base/Header.vue";
import Footer from "@/components/base/Footer.vue";

import { defineComponent  } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer,
    HelloWorld
  }
})
</script>

<template>
  <Header />
  <main id="page-content" class="container mx-auto py-8">
    <RouterView />
  </main>
  <Footer />
</template>

<style lang="scss">
@import "@/assets/base.css";
@import "@/assets/scss/_variable.scss";

#app {
  min-height: 100vh;
}
</style>
