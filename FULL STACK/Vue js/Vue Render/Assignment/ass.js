const app = Vue.createApp({
  data() {
    return {
      task: "",
      taskArr: [],
      taskListIsVisible: true,
    };
  },
  methods: {
    addTask() {
      return this.taskArr.push(this.task);
    },
    toggleTask() {
      return (this.taskListIsVisible = !this.taskListIsVisible);
    },
  },
  computed: {
    buttonStatus() {
      return this.taskListIsVisible ? "Hide" : "show";
    },
  },
});
app.mount(".section");
