<template>
  <template v-for="(menuItem, index) in menuList" :key="index">
    <el-menu-item v-if="!menuItem.subMenu" :index="menuItem.path">
      <el-icon v-if="menuItem.foldTitle">
        <span v-if="typeof menuItem.foldTitle === 'string'">{{
          menuItem.foldTitle
        }}</span>
      </el-icon>
      <template #title>
        <span v-if="menuItem.title">{{ menuItem.title }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu v-else-if="menuItem.subMenu" index="">
      <template #title>
        <el-icon v-if="menuItem.foldTitle">
          <span v-if="typeof menuItem.foldTitle === 'string'">{{
            menuItem.foldTitle
          }}</span>
        </el-icon>
        <span v-if="menuItem.title">{{ menuItem.title }}</span>
      </template>
      <!-- {{menuItem.subMenu}} -->
      <component :is="'sub-menu'" :menuList="menuItem.subMenu"></component>
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import type { MenuItem } from "./type";
const { menuList } = defineProps({
  menuList: {
    type: Array<MenuItem>,
  },
});
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>
