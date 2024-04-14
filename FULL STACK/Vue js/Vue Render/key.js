const app = Vue.createApp({
  data() {
    return {
      goal: [],
      fetchGoals: "",
    };
  },
  methods: {
    setGoals() {
      return this.goal.push(this.fetchGoals);
    },
    setReset() {
      return (this.fetchGoals = "");
    },
    setremove(index) {
      return this.goal.splice(index, 1);
    },
  },
});
app.mount(".container");
