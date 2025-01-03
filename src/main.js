import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";
import Auth from "./components/Auth.vue";

const routes = [
  { path: "/", component: ProductList },
  { path: "/cart", component: Cart },
  { path: "/auth", component: Auth },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

import "./assets/fonts.css";

createApp(App).use(router).mount("#app");
