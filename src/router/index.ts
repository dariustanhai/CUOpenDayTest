import {
  createRouter as createVueRouter,
  createWebHashHistory,
} from "vue-router";

export function createRouter() {
  return createVueRouter({
    history: createWebHashHistory(),
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
