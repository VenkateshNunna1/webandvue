const app = Vue.createApp({
  data() {
    return {
      goal: "Learn Vue",
      goalA: "Master in Vue",
      goalB: "Expert in Vue",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randNum = Math.random();
      if (randNum < 0.5) {
        return this.goalA;
      } else {
        return this.goalB;
      }
    },
  },
});
app.mount(".venky");
