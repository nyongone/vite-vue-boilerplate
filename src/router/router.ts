import HomePage from "@/pages/HomePage.vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
