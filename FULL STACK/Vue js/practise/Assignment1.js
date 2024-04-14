const app = Vue.createApp({
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    mode() {
      alert("hi venkatesh");
    },
    setName(event) {
      this.name = event.target.value;
    },
    setEmail(event) {
      this.email = event.target.value;
    },
  },
});
app.mount(".ass");
