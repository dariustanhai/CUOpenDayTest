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
        redirect: "/CUOpenDayTest",
      },
      {
        path: "/CUOpenDayTest",
        name: "home",
        component: () => import("../pages/HomePage.vue"),
      },
      {
        path: "/CUOpenDayTest/courses",
        name: "courses",
        component: () => import("../pages/CoursesPage.vue"),
      },
      {
        path: "/CUOpenDayTest/course/:id",
        name: "course",
        component: () => import("../pages/CoursePage.vue"),
      },
    ],
  });
}
