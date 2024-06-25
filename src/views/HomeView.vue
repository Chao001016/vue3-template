<script setup lang="ts"></script>

<template>
  <main>
    <side-bar></side-bar>
    <div class="main-page">
      <router-view></router-view>
    </div>
  </main>
</template>
<style scoped>
main {
  display: flex;
  height: 100%;
  width: 100%;
}
.main-page {
  overflow: hidden auto;
  padding: 10px;
  flex-basis: 100%;
  flex-shrink: 1;
}
</style>
