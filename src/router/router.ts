import Home from "@/pages/Home.vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
