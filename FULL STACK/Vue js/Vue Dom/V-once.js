const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount() {
      return (this.count = this.count + 10);
    },
    subCount() {
      return (this.count = this.count - 5);
    },
  },
});
app.mount(".V-once");
