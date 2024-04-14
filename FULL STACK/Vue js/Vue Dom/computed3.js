const app = Vue.createApp({
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  computed: {
    fullName1() {
      if (this.firstName === "" || this.lastName === "") {
        return (this.fullName1 = "");
      }
      return `${this.firstName}  ${this.lastName}`;
    },
  },
  methods: {
    setReset() {
      return `${(this.firstName = "")}  ${(this.lastName = "")}`;
    },
  },
});
app.mount(".gani");
