<script  lang="ts">
import { defineComponent  } from "vue";

export default defineComponent({
  name: "CardCategory",
  // components: { 
  // },
  // props: {
  // },
  // computed: {
  // }
})

</script>

<template>
  <!-- <div class="item">
    <i>
      <slot name="title"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div> -->

  <div class="category-card rounded">
    <div class="category-card-header flex items-center justify-between">
      <h2 class="">
        <slot name="title"></slot>
      </h2>
      <p class="">+</p>
      <div class="relative inline-block text-left">
        <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
          ...
          <!-- Heroicon name: solid/chevron-down -->
          <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <div class="z-1 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="py-1" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Delete</a>
          </div>
        </div>
      </div>
    </div>

    <div class="category-card-content p-2">
      <div class="bg-white rounded border-b border-grey cursor-pointer hover:bg-grey-lighter">
        <p>
          <slot name="content"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.category-card {
  min-width: 300px;
  height: 100%;
  background: lightgrey;

  .category-card-header {
    border-bottom: 1px solid black;
    padding: 10px;
  }

  .category-card-content {
    overflow-y: scroll;
  }
}
</style>
