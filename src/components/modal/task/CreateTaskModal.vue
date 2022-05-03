<template>
  <div
    aria-hidden="true"
    class="flex absolute overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
  >
    <div class="relative w-full max-w-md h-full md:h-auto m-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex justify-end p-2">
          <button
            @click="$emit('modalUpdate')"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="authentication-modal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <form
          class="px-6 pb-4 space-y-6 lg:p x-8 sm:pb-6 xl:pb-8"
          @submit.prevent="storeTask"
        >
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Create Task
          </h3>
          <div>
            <label
              for="task-content"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Content</label
            >
            <textarea
              v-model="task.content"
              type="text"
              id="task-content"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Title"
              required
            ></textarea>
            <label
              for="task-date"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Date</label
            >
            <input type="date" id="task-date" v-model="task.date" required />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { todoStore } from "@/stores/todo";

export default defineComponent({
  name: "CreateTaskModal",

  props: ["categoryId"],

  data() {
    return {
      task: {
        content: String(),
        date: Date(),
        status: ["Todo", "In progress", "Done"],
      },
    };
  },

  setup() {
    const sTodo = todoStore();
    const { addTask } = sTodo;
    return { addTask };
  },

  methods: {
    storeTask() {
      this.addTask(this.categoryId, this.task.content, this.task.date);
      this.$emit("modalUpdate");
    },
  },
});
</script>

<style lang="scss"></style>
