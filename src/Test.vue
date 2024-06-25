<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <span>{{ props.title }}</span>
</template>

<style scoped></style>
