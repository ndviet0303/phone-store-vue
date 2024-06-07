import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/auth/SignInView.vue";
import SignUpView from "@/views/auth/SignUpView.vue";
import DetailProductView from "@/views/DetailProductView.vue";
import ProfileView from "@/views/profile/ProfileView.vue";
import ProductHistories from "@/views/profile/ProductHistories.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { breadcrumb: "Home" },
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignInView,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUpView,
    },
    {
      path: "/detail-product/:slug",
      name: "detail-product",
      component: DetailProductView,
      props: true,
      meta: { breadcrumb: "Product Detail" },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/product-histories",
      name: "product-histories",
      component: ProductHistories,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "home" },
    },
  ],
});

export default router;
