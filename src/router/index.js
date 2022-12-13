import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import PurchasePage from "../views/PurchasePage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/Login",
      component: LoginPage,
    },
    {
      path: "/Purchase",
      component: PurchasePage,
    },
  ],
});

export default router;


