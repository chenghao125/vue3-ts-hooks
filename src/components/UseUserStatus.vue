<template>
  <div class="user-status-box">
    测试hook 统一状态:
    <button @click="setStatus">修改setStatus</button>
    {{ status.status }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserStatus } from "@/hooks";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    // useUserStatus
    const { status, setUserStatus } = useUserStatus;

    const setStatus = () => {
      setUserStatus(2);
    };
    return { setStatus, status };
  },
});
</script>
<style scoped>
.user-status-box {
  padding: 10px 0;
}
</style>
