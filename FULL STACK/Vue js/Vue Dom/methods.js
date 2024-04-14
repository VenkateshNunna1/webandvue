const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Vue is the most used javascript Framework",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randNum = Math.random();
      if (randNum < 0.5) {
        return `Learn Vue`;
      } else {
        return `Master Vue`;
      }
    },
  },
});
app.mount("#goal");
