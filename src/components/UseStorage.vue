<template>
  <div class="storage-box">
    测试storage hook:
    <button @click="setStorage">修改storage</button>
    {{ getKey }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStorage } from "@/hooks";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    // useStorage
    type userinfo = {
      userid: string;
    };
    async function setStorage() {
      const storage = await useStorage<userinfo>("userinfo", {
        userid: new Date().getTime().toString(),
      });
      console.info(storage);
    }
    const getKey = useStorage<userinfo>("userinfo");
    return { setStorage, getKey };
  },
});
</script>
<style scoped>
.storage-box {
  padding: 10px 0;
}
</style>
