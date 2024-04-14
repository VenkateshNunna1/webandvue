const app = Vue.createApp({
  data() {
    return {
      count: 0,
      message: "",
      link: "https://vuejs.org/",
    };
  },
  computed: {
    msg() {
      if (this.count < 37) {
        return (this.message = "Not There yet");
      } else if (this.count > 37) {
        return (this.message = "Too Much...");
      } else {
        return (this.message = "37");
      }
    },
  },
  methods: {
    addCount5() {
      return (this.count = this.count + 5);
    },
    addCount1() {
      return (this.count = this.count + 1);
    },
  },
  watch: {
    count(value) {
      if (value > 0) {
        setTimeout(() => {
          this.count = 0;
        }, 5000);
      }
    },
  },
});
app.mount(".ass");
