import { createApp } from "vue";
import App from "./App.vue";
import TheHome from "./components/TheHome.vue";
import CreatePost from "./components/CreatePost.vue";
import ThePosts from "./components/ThePosts.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: TheHome,
  },
  {
    path: "/posts",
    component: ThePosts,
  },
  {
    path: "/createpost",
    component: CreatePost,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
const app = createApp(App);
app.use(router);
app.mount("#app");
