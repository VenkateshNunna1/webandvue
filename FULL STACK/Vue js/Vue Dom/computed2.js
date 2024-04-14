const app = Vue.createApp({
  data() {
    return {
      firstName: "",
      lastName: "",
      fullName: "",
    };
  },
  methods: {
    setFirstName(event) {
      this.firstName = event.target.value;
    },
    // setLastName(event) { when you use v-model you don't need this method
    //   this.lastName = event.target.value;
    // },
    setFullName() {
      if (this.firstName === "" || this.lastName === "") {
        return (this.fullName = "");
      }
      this.fullName = this.firstName + " " + this.lastName;
    },
    setReset() {
      (this.firstName = ""), (this.lastName = ""), (this.fullName = "");
    },
  },
});
app.mount("#computed");
