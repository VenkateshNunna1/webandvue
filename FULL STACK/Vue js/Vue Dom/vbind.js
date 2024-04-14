const app = Vue.createApp({
  data() {
    return {
      courseGoals: "Finish the course and learn the vue",
      vueLink: "https://vuejs.org/",
    };
  },
});
app.mount("#goals");
