const app = Vue.createApp({
  data() {
    return {
      name: "venkatesh",
      age: 23,
      gender: "male",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Man_Daeng_Waterfall.jpg/640px-Man_Daeng_Waterfall.jpg",
      value: "Venkatesh Nunna",
    };
  },
  methods: {
    random() {
      const randNum = Math.random();
      return `My favourite num between 0 and 1 ${randNum}`;
    },
  },
});
app.mount(".bio");
