<template>
  <header clas="container bg-white">
    <nav class="py-7 flex gap-8 max-w-7xlmx-auto px-4 sm:px-6">
      <div>
          <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="50"
          height="50"
          />
      </div>
      <div class="flex items-center">
        <ul class="flex gap-8">
          <li>
            <RouterLink to="/dashboard">Dashboard</RouterLink>
          </li>
          <li>
            <RouterLink to="/settings">Settings</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script  lang="ts">
import { defineComponent  } from "vue";

export default defineComponent({
  name: "Header",
})
</script>

<style scoped lang="scss">
header {
  border-bottom: 1px solid black;
}

</style>