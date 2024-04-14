const app = Vue.createApp({
  data() {
    return {
      showDetailsfunc: false,
      friends: [
        {
          id: 1,
          name: "venkatesh",
          mobileNumber: 567894,
          email: "venky@gmail.com",
        },
        {
          id: 2,
          name: "ganesh nunna",
          mobileNumber: 5678874,
          email: "ganesh@gmail.com",
        },
      ],
    };
  },
  methods: {
    toggleFunc() {
      this.showDetailsfunc = !this.showDetailsfunc;
    },
  },
  computed: {
    buttonContent() {
      if (this.showDetailsfunc) {
        return "hide";
      } else {
        return "show";
      }
    },
  },
});
app.mount(".container");
