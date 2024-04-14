const app = Vue.createApp({
  data() {
    return {
      TestAverage: 49.89,
      OdiAverage: 58.96,
      T20Average: 51.67,
      viratInfo: "https://www.cricbuzz.com/profiles/1413/virat-kohli",
      viratWife: "<h1>AnushkaSharma</h1>",
    };
  },
  methods: {
    carrer() {
      const randNum = Math.random();
      if (randNum <= 0.35) {
        return this.TestAverage;
      } else if (randNum > 0.35 && randNum < 0.75) {
        return this.OdiAverage;
      } else {
        return this.T20Average;
      }
    },
  },
});
app.mount(".virat");
