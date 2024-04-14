import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import TheHome from "./components/TheHome.vue";
import TheTirupathi from "./components/TheTirupathi.vue";
import TheBangalore from "./components/TheBangalore.vue";
import TheChennai from "./components/TheChennai.vue";
import DynamicRoute from "./components/DynamicRoute.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", component: TheHome },
    { path: "/about", component: () => import("./components/TheAbout.vue") }, //lazy loading
    { path: "/bangalore", component: TheBangalore },
    { path: "/chennai", component: TheChennai },
    {
      path: "/tirupati",
      component: TheTirupathi,
    },
    {
      path: "/dynamicRoute/:ganesh",
      component: DynamicRoute,
    },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
