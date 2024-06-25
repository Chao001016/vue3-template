// import SideBar from '@/components/sideBar/SideBar.vue'
import SubMenu from "@/components/sideBar/SubMenu.vue";
import type { App } from "vue";
export default {
  install(app: App) {
    app.component("sub-menu", SubMenu);
  },
};
