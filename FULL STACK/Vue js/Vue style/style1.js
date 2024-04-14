const app = Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false,
    };
  },
  methods: {
    selectedBox(box) {
      if (box === "A") {
        return (this.boxA = true);
      } else if (box === "B") {
        return (this.boxB = true);
      } else if (box === "C") {
        return (this.boxC = true);
      }
    },
  },
});
app.mount(".container");
