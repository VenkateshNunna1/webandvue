const app = Vue.createApp({
  data() {
    return {
      name: "",
      placeholder: "Enter Name",
    };
  },
  methods: {
    //   // setName(event) {
    //   //   this.name = event.target.value;
    //   // },
    setReset() {
      this.name = "";
    },
  },
});
app.mount(".gani");
