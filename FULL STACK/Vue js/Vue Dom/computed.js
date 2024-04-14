const app = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  computed: {
    fullname() {
      return `${this.name}  Nunna`;
    },
  },
  methods: {
    setReset() {
      return (this.name = "");
    },
    setName(event) {
      return (this.name = event.target.value);
    },
  },
});
app.mount(".computed");

// const app = Vue.createApp({
//   data() {
//     return {
//       name: "",
//     };
//   },
//   methods: {
//     setName(event) {
//       this.name = event.target.value;
//     },
//     setReset() {
//       this.name = "";
//     },
//   },
// });
// app.mount(".computed");
