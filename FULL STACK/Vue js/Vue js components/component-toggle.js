const app = Vue.createApp({
  data() {
    return {
      showDetails: false,
      friends: [
        {
          id: 1,
          name: "venkatesh",
          mobileNumber: 622655462,
          email: "venky@gmail.com",
        },
        {
          id: 2,
          name: "venkata ganesh",
          mobileNumber: 484515515,
          email: "gani@gmail.com",
        },
      ],
    };
  },
  methods: {
    toogleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
  computed: {
    buttonContent() {
      if (this.showDetails) {
        return "hide";
      } else {
        return "show";
      }
    },
  },
});
app.mount(".container");
