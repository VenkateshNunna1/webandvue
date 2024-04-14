const app = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    setReset() {
      this.name = "";
    },
  },
});
app.mount(".school");
