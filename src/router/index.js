import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Schedule from "../views/Schedule.vue";

import domiSchedule from "../components/schedule/domiSchedule.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
    redirect: "/schedule/domiibunn",
    children: [
      {
        path: "/schedule/domiibunn",
        component: domiSchedule,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
