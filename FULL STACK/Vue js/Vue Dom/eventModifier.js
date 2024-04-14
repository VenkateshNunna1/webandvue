const app = Vue.createApp({
  data() {
    return {
      name: "",
      count: 0,
      preventModifier1: "",
    };
  },
  methods: {
    addCount() {
      return (this.count = this.count + 10);
    },
    subCount() {
      if (this.count > 0) return (this.count = this.count - 5);
    },
    preventModifier() {
      return (this.preventModifier1 = "prevent modifier is working");
    },
    setName(event) {
      return (this.name = event.target.value);
    },
  },
});
app.mount(".eventModifier");
