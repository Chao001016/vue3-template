<template>
  <el-menu
    default-active="2"
    :router="true"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <el-menu-item
      index=""
      @click="isCollapse = !isCollapse"
      :class="{ fold: isCollapse, expand: !isCollapse }"
    >
      <div class="icon-wrapper">
        <el-icon v-show="isCollapse"><Expand /></el-icon>
        <el-icon v-show="!isCollapse"><Fold /></el-icon>
      </div>
    </el-menu-item>
    <sub-menu :menuList="menuList"></sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from "vue";
import SubMenu from "./SubMenu.vue";
import { Expand, Fold } from "@element-plus/icons-vue";
import type { MenuItem } from "./type";

const isCollapse = ref(true);
// const handleOpen = (key: string, keyPath: string[]) => {}
// const handleClose = (key: string, keyPath: string[]) => {}

const getRerportMenu = (): MenuItem[] => {
  const reportMenuList: MenuItem[] = [];
  const reports = import.meta.globEager("@/components/report/*.vue");
  const prefix = "report";
  for (const path in reports) {
    const reportObj = reports[path];
    const name = path.slice(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
    reportMenuList.push({
      title: path.slice(path.lastIndexOf("/") + 1, path.lastIndexOf(".")),
      path: name,
    });
  }
  return reportMenuList;
};
const menuList: MenuItem[] = [
  {
    title: "报表",
    foldTitle: "表",
    subMenu: [...getRerportMenu()],
  },
  {
    title: "child2",
    foldTitle: "2",
  },
  {
    title: "child3",
    foldTitle: "3",
  },
];
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.fold {
  width: calc(
    var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2
  );
  border-bottom: 1.4px solid #dedbdb;
  /* border: 1px solid black; */
}
.expand {
  width: 200px;
  border-bottom: 1.4px solid #dedbdb;
}
.icon-wrapper {
  margin: 0 auto;
}
</style>
