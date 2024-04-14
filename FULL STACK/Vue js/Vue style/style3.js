const app = Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        return (this.boxA = !this.boxA);
      } else if (box === "B") {
        return (this.boxB = true);
      }
    },
  },
  computed: {
    boxAClass() {
      return { gani: this.boxA };
    },
  },
});
app.mount(".container");
