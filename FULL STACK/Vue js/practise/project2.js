const app = Vue.createApp({
  data() {
    return {
      name: "",
      lastName: "",
      email: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    setLast(event) {
      this.lastName = event.target.value;
    },
    setEmail(event) {
      this.email = event.target.value;
    },
  },
});
app.mount(".form");
