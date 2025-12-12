import {
  createRouter as createVueRouter,
  createMemoryHistory,
  createWebHistory,
} from "vue-router";

export function createRouter() {
  const isServer = typeof window === "undefined";

  return createVueRouter({
    history: isServer ? createMemoryHistory() : createWebHistory(),
    routes: [
      {
        path: "/",
        name: "home",
        component: () => import("../pages/HomePage.vue"),
      },
    ],
  });
}
