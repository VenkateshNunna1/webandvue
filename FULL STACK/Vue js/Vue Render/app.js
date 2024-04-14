const app = Vue.createApp({
  data() {
    return {
      addGoal: "",
      goals: [],
    };
  },
  methods: {
    addGoals() {
      return this.goals.push(this.addGoal);
    },
  },
});
app.mount("#user-goals");
