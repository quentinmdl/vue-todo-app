<template>
  <div class="category-card rounded">
    <div class="category-card-header">
      <div class="flex items-center justify-between">
        <h2 class="">
          <slot name="title"></slot>
        </h2>
        <div class="category-actions relative">
          <button @click="$emit('renameCategory')" class="px-2 py-2">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button @click="deleteCategory" class="px-2 py-2">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <div>
        <slot name="details"></slot>
      </div>
    </div>

    <div class="category-card-content p-2">
      <div>
        <p>
          <slot name="content"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import { todoStore } from "@/stores/todo";

  export default defineComponent({
    name: "CategoryCard",
    components: {},

    props: ["categoryId"],

    data() {
      return {
      };
    },

    setup() {
      const sTodo = todoStore();
      const { removeCategory } = sTodo;
      return { removeCategory };
    },

    methods: {
      deleteCategory() {
        this.removeCategory(this.categoryId);
      },
    },
  });
</script>

<style lang="scss">
  .category-card {
    min-width: 300px;
    height: 100%;
    background: lightgrey;

    .category-card-header {
      border-bottom: 1px solid black;
      padding: 10px;
      height: 10%;

      .submenu {
        z-index: 2;
      }
    }

    .category-card-content {
      overflow-y: scroll;
      height: 90%;
    }
  }
</style>
