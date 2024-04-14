const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      return this.count++;
    },
    reduce() {
      if (this.count > 0) return this.count--;
    },
  },
});
app.mount(".event");
