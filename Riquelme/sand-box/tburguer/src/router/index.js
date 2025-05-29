import { createRouter, createWebHistory } from "vue-router";
import MenuView from "@/views/MenuView.vue";
import PedidosView from "@/views/PedidosView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MenuView,
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: PedidosView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
