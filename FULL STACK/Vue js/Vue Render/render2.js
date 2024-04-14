const app = Vue.createApp({
  data() {
    return {
      Tasks: [],
      fetchTask: "",
      person: {
        id: 1,
        name: "venkatesh",
        mobile_number: 6309875788,
      },
    };
  },
  methods: {
    addTasks() {
      return this.Tasks.push(this.fetchTask);
    },
    setReset() {
      return (this.fetchTask = "");
    },
    removeTask(index) {
      return this.Tasks.splice(index, 1);
    },
  },
});
app.mount(".container");
