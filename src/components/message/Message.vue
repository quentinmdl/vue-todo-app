<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-lg rounded-lg">
        <div class="p-6 bg-white border border-gray-200">
          <div>
            <div class="bg-white p-x-4 p-y-3 m-y-5 radius-10 box-shadow">
              <div class="alert alert-success">
                {{ message.content }} MESSAGE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MessageComponent",
  data() {
    return {
      message: {
        content: String(),
        status: String(),
      },
    };
  },

  // setup() {

  // },

  methods: {},
});
</script>

<style lang="scss"></style>
