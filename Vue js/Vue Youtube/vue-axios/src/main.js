import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
axios.defaults.headers.post["venky"] = "venkatesh nunna post config";
axios.defaults.headers.get["venky"] = "venkatesh nunna get config";
axios.defaults.baseURL =
  "https://vue-http-project-9c8f7-default-rtdb.firebaseio.com/";
createApp(App).mount("#app");
