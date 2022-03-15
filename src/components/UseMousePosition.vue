<template>
  <div class="mouse-position-box" ref="mousePosition">
    鼠标位置 hook: X:{{ mouse.x }} Y:{{ mouse.y }}
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, onMounted } from "vue";
import { useMousePosition } from "@/hooks";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    // useMousePosition
    let mousePosition = ref();
    let mouse = ref({});
    onMounted(() => {
      mouse.value = useMousePosition(mousePosition.value);
    });

    return { mouse, mousePosition };
  },
});
</script>
<style scoped>
.mouse-position-box {
  padding: 10px 0;
}
</style>
