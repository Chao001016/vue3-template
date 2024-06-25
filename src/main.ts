import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import AppTest from "./AppTest.vue";
import { routes } from "./router";

import "./assets/main.css";

import globalConponent from "./plugins/globalConponent";
import { createRouter, createWebHashHistory } from "vue-router";

const app = createApp(App);
app.use(createPinia());
app.use(
  createRouter({
    routes,
    history: createWebHashHistory(),
  })
);
app.use(globalConponent);
// 全局注册组件

app.mount("#app");
