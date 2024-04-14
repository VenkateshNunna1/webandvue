import { createApp } from "vue";
import App from "./App.vue";
//import TheHome from "./components/TheHome.vue";
import ThePost from "./components/ThePost.vue";
import CreatePost from "./components/CreatePost.vue";
import ShowPost from "./components/ShowPost.vue";
import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import NotFound from "./components/NotFound.vue";

const routes = [
  {
    path: "/",
    // component: TheHome,
    redirect: "/thepost", //
    // alias: "/",
  },
  {
    path: "/thepost",
    component: ThePost,
  },
  {
    path: "/thepost/:id", //dynamic route
    component: ShowPost,
  },
  {
    path: "/createpost",
    component: CreatePost,
  },
  {
    path: "/:NotFound(.*)*",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
axios.defaults.baseURL =
  "https://vue-http-project-9c8f7-default-rtdb.firebaseio.com/";
const app = createApp(App);
app.use(router);
app.mount("#app");
