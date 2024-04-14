const app = Vue.createApp({
  data() {
    return {
      goals: [],
      fetchGoal: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.fetchGoal);
    },
    setReset() {
      return (this.fetchGoal = "");
    },
  },
});
app.mount(".container");
