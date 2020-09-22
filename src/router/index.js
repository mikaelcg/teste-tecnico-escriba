import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//Modukles
import Users from "@/router/modules/users.js";

const routes = [...Users];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
