const app = Vue.createApp({
  data() {
    return {
      message: "",
    };
  },
  methods: {
    fetchMessage() {
      this.message = this.$refs.userText.value;
    },
  },
});
app.mount(".container");
