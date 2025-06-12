import HomePage from "@/pages/HomePage.vue";
import {
  createRouter,
  createWebHistory,
  type Router,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
];

export const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
