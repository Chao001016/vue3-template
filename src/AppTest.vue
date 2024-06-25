<script setup lang="ts">
import { RouterView } from "vue-router";
import {
  computed,
  effect,
  ref,
  reactive,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
import Test from "@/Test.vue";
const objFlag = reactive({
  flag: "111",
  flag2: "222",
});

setTimeout(() => {
  objFlag.flag = "222";
}, 500);
</script>

<template>
  <div>
    <p>{{ objFlag.flag }}</p>
    <Test :title="objFlag.flag2"></Test>
  </div>
</template>
<!-- Fragment -->
<!-- <template>
  <div>1</div>
  <div>2</div>
</template> -->
<!-- 文本节点 和 元素节点下的文本节点都变化 -->
<!-- <template>
  <div>
    {{ obj.c }}
   <span v-if="objFlag.flag">
    {{ obj.a }}
  </span>
   <span v-else>
    {{ obj.b }}
  </span>
  </div>
</template> -->

<!-- 文本节点变化，patchElement，shapeFlag 为 9，patchFlag为 1 -->
<!-- <template>
  <div>
    {{ buttonTitle }}
    aa
  </div>
</template> -->

<!-- dynamicChildren赋值测试，v-if 修饰的节点的父VNode具有有值的dynamicChildren属性 -->
<!-- <template>
  <div>
    <span v-if="buttonTitle == '1'">{{ '11' }}</span>
    <span v-else>{{ '22' }}</span>
  </div>
</template> -->

<style scoped></style>
