import { defineAsyncComponent } from "vue";
import type { RouteRecordRaw } from "vue-router";
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/index",
    component: defineAsyncComponent(() => import("@/views/index.vue")),
  },
  {
    path: "/",
    redirect: "/index",
  },
];
