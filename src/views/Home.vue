<template>
  <div class="home">
    <UseStorage></UseStorage>
    <UseUserStatus></UseUserStatus>
    <UseMousePosition></UseMousePosition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import UseStorage from "@/components/UseStorage.vue";
import UseUserStatus from "@/components/UseUserStatus.vue";
import UseMousePosition from "@/components/UseMousePosition.vue";

export default defineComponent({
  name: "Home",
  components: {
    UseStorage,
    UseUserStatus,
    UseMousePosition,
  },
  setup() {
    // count
    const count = ref(0);
    function setCount() {
      count.value++;
    }
    return { setCount, count };
  },
});
</script>
