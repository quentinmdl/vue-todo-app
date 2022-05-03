<template>
  <section id="dashboard relative">
    Dashboard Page

    <div class="flex my-2">
      <input
        class="border"
        type="number"
        v-model="properties.categoryNumber"
        placeholder="Number categories"
        min="1"
      />
      <input
        class="border"
        type="number"
        v-model="properties.taskNumber"
        placeholder="Number tasks by category"
        min="1"
      />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="generate"
      >
        Generate
      </button>
    </div>
    <div class="categories">
      <category-card
        v-for="(category, index) in categories"
        :key="category.id"
        :categoryId="index + 1"
        v-on:renameCategory="categoryEditInput()"
      >
        <template #title v-if="showEditCategoryInput == false">{{
          category.title
        }}</template>
        <template #title v-else
          ><input
            type="text"
            :categoryId="category.id"
            :value="category.title"
            v-on:keyup.enter="updateCategory"
        /></template>
        <template #content>
          <task-card
            v-for="task in tasks(category.id)"
            :key="task.id"
            :taskId="task.id"
            :categoryId="category.id"
            v-on:updateTask="updateTask"
          >
            <template #content>{{ task.content }}</template>
            <template #date>{{ task.date }}</template>
            <template #status>Status : {{ task.state }}</template>
          </task-card>
          <div
            @click="(showCreateTaskModal = true), getCategoryId(category.id)"
            class="task-card-empty cursor-pointer flex items-center justify-center"
          >
            <div class="">
              <p>Add new task</p>
            </div>
          </div>
        </template>
      </category-card>
      <div
        @click="showCreateCategoryModal = true"
        class="category-card-empty cursor-pointer flex items-center justify-center"
      >
        <div class="bg-white">
          <p>Add new column</p>
        </div>
      </div>
    </div>

    <create-category-modal
      v-on:modalUpdate="categoryModalShow()"
      v-if="showCreateCategoryModal"
    ></create-category-modal>
    <create-task-modal
      v-on:modalUpdate="taskCreateModalShow"
      v-if="showCreateTaskModal"
      :categoryId="categoryId"
    ></create-task-modal>
    <edit-task-modal
      v-on:modalUpdate="taskEditModalShow"
      v-if="showEditTaskModal"
      :taskId="currentTaskId"
    ></edit-task-modal>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CategoryCard from "@/components/cards/CategoryCard.vue";
import TaskCard from "@/components/cards/TaskCard.vue";
import CreateCategoryModal from "@/components/modal/category/CreateCategoryModal.vue";
import CreateTaskModal from "@/components/modal/task/CreateTaskModal.vue";
import EditTaskModal from "@/components/modal/task/EditTaskModal.vue";

import { todoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";

import type { ICategory } from "@/models/category";
import type { ITask } from "@/models/task";

export default defineComponent({
  name: "DashboardView",
  components: {
    CategoryCard,
    TaskCard,
    CreateCategoryModal,
    CreateTaskModal,
    EditTaskModal,
  },

  data() {
    return {
      showCreateCategoryModal: false,
      showEditCategoryInput: false,

      showCreateTaskModal: false,
      showEditTaskModal: false,

      categoryId: Number(),
      taskId: Number(),
      currentTaskId: Number(),

      properties: {
        categoryNumber: 2,
        taskNumber: 2,
      },
    };
  },

  setup() {
    const sTodo = todoStore();

    const { getCategories, getTasks } = storeToRefs(sTodo);

    const { generateAll, editCategory } = sTodo;
    const { getTasksByCategoryId } = sTodo;

    return { getTasks, getCategories, generateAll, editCategory, getTasksByCategoryId };
  },

  methods: {
    generate() {
      this.generateAll(
        this.properties.categoryNumber,
        this.properties.taskNumber
      );
    },

    categoryEditInput() {
      this.showEditCategoryInput = !this.showEditCategoryInput;
    },
    categoryModalShow() {
      this.showCreateCategoryModal = !this.showCreateCategoryModal;
    },

    taskCreateModalShow() {
      this.showCreateTaskModal = !this.showCreateTaskModal;
    },
    taskEditModalShow() {
      this.showEditTaskModal = !this.showEditTaskModal;
    },

    updateCategory(e: Event) {
      this.editCategory(
        (e.target as HTMLInputElement).attributes.categoryId.value,
        (e.target as HTMLInputElement).value
      );
      this.categoryEditInput();
    },

    updateTask(id: number) {
      this.currentTaskId = id,  
      this.taskEditModalShow();
    },

    tasks(categoryId: number): ITask[] {
      return this.getTasksByCategoryId(categoryId);
    },  
    
    getCategoryId(id: number): number {
      return (this.categoryId = id);
    },
  },

  computed: {
    categories(): ICategory[] {
      // console.log(this.getCategories);
      return this.getCategories;
    },

  },
  
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

    .category-card-empty {
      min-width: 300px;
      border: 1px dashed black;
    }
    .task-card-empty {
      width: 100%;
      height: 100px;
      border: 1px dashed black;
    }
  }
</style>
