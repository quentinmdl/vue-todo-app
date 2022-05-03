<template>
  <div class="bg-white rounded mb-7 cursor-pointer">
    <div class="task-actions flex justify-end">
      <button @click="$emit('updateTask', taskId)" class="px-2 py-2">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button @click="deleteTask" class="px-2 py-2">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
    <div class="text-grey-darker p-2 ml-2 flex justify-between items-start">
      <p>
        <slot name="content"></slot>
      </p>
    </div>
    <div class="details p-2 flex justify-between">
      <small>
        <slot name="date"></slot>
      </small>
      <small>
        <slot name="status"></slot>
      </small>
    </div>
  </div>
</template>

<script lang="ts">
import { todoStore } from "@/stores/todo";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskCard",
  components: {},
  props: ["categoryId", "taskId"],

  data() {
    return {
      currentState: String()
    };
  },

  setup() {
    const sTodo = todoStore();
    const { removeTask, getTaskById } = sTodo;
    return { removeTask, getTaskById };
  },


  mounted() {
    this.currentState = this.getTaskById(this.taskId)[0].state;
    console.log(this.currentState);
  },

  methods: {
    deleteTask() {      
      this.removeTask(this.taskId);
    },
  },

});
</script>

<style lang="scss"></style>
