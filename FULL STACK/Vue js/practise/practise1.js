const app = Vue.createApp({
  data() {
    return {
      virat: "Virat is the one of the GOAT",
      img: "https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlyYXQlMjBrb2hsaXxlbnwwfHwwfHx8MA%3D%3D",
      viratLink: "https://www.cricbuzz.com/profiles/1413/virat-kohli",
      count: 0,
    };
  },
  methods: {
    followersInc() {
      this.count++;
    },
    followersdec() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
});
app.mount(".virat");
