const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    setAdd() {
      return (this.count = this.count + 10);
    },
    setReduce() {
      if (this.count > 0) return (this.count = this.count - 5);
    },
    count1() {
      //without watchers
      if (this.count > 50) {
        setTimeout(() => {
          this.count = 0;
        }, 1000);
      }
    },
  },
  watch: {
    count(value, value1) {
      //with watchers
      if (value > 50) {
        //it will accept two values current value and previous value
        setTimeout(() => {
          this.count = 0;
        }, 1000);
      }
    },
  },
});
app.mount(".watch");
