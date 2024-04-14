const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add(num) {
      this.count = this.count + num;
      return this.count;
    },
    reduce(num) {
      if (this.count > 0) return (this.count = this.count - num);
    },
  },
});
app.mount(".event");
