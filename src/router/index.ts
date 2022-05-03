import { createRouter, createWebHistory } from "vue-router";

// Components
import Dashboard from "../views/Dashboard.vue";
import SettingVue from "@/views/Setting.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "app",
      component: Dashboard,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/settings",
      name: "setting",
      component: SettingVue,
    },
  ],
});

export default router;
