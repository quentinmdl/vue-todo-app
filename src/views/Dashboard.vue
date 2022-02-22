<template>
  <section id="dashboard relative">
    Dashboard Page

    <div class="categories">
      <card-category>
        <template #title>Firt Category</template>
        <template #content>
            <card-task>
              <template #content>Task Content</template>
            </card-task>
        </template>
      </card-category>
      <div @click="openCreateCategory" class="card-empty cursor-pointer flex items-center justify-center">
        <div class="bg-white">
          <p>
            Add new column
          </p>
        </div>
      </div>
    </div>

    <create-category v-if="openCreate"></create-category>
  </section>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardCategory from "@/components/cards/Category.vue";
import CardTask from "@/components/cards/Task.vue";
import CreateCategory from "@/components/category/Create.vue";

import { categoryStore } from "@/stores/categories"

export default defineComponent({
  name: 'Dashboard',
  components: {
    CardCategory,
    CardTask,
    CreateCategory
  },
  data() {
    return {
      openCreate: false,
      categories: []
    }
  },

  setup() {
    const category = categoryStore();
  },

  mounted() {
    if (localStorage.categories) {
      this.categories = localStorage.categories;
    }
  },

  methods: {
    openCreateCategory(event: MouseEvent) {
      if(this.openCreate == true) {
        this.openCreate = false;
      } else {
        this.openCreate = true;
      }
    },
  }
});

</script>

<style lang="scss">
#dashboard {
  height: 100vh;
}
.categories {
  display: flex;
  gap: 30px;
  overflow-x: scroll;
  height: 75vh;

  .card-empty {
    min-width: 300px;
    border: 1Px dashed black;
  }
}
</style>