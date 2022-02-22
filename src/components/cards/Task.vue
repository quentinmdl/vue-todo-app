<script  lang="ts">
import { defineComponent  } from "vue";

export default defineComponent({
  name: "CardTask",
  // components: { 
  // },
  // props: {
  // },
  // computed: {
  // }
})

</script>

<template>
    <div class="bg-white p-2 rounded mt-1 cursor-pointer">
      <div class="text-grey-darker ml-2 flex justify-between items-start">      
        <p>
            <slot name="content"></slot>
        </p>
      </div>
    </div>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
