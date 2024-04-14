<template>
  <h1>Watcher's concept</h1>
  <article class="article">
    <h1>Set Volume</h1>
    <button @click="toggle">{{ buttonName }} Buttons</button>
    <nav v-if="toggleButtons">
      <div><button @click="increase">Increase Volume</button></div>
      <div><button @click="decrease">Decrease Volume</button></div>
      <h1>Current Volume {{ volume }}</h1>
    </nav>
    <input type="text" v-model="movie" />
    ,<input type="text" v-model="movie1" />
    <input type="text" v-model="movieInfo.title" />
    <input type="text" v-model="movieInfo.actor" />
    <div>
      <button @click="movies.push('pushpa')">Add movie</button>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      volume: 0,
      toggleButtons: false, // Change to boolean
      movie: "",
      movie1: "batman",
      movieInfo: {
        title: "",
        actor: "",
      },
      movies: ["RRR", "BAHUBALI"],
    };
  },
  methods: {
    increase() {
      if (this.volume < 20) return (this.volume += 2);
    },
    decrease() {
      if (this.volume > 0) return (this.volume -= 2);
    },
    toggle() {
      this.toggleButtons = !this.toggleButtons; // Toggle the value
    },
  },
  watch: {
    volume(newValue, oldValue) {
      if (newValue > oldValue && this.volume === 16) {
        alert("If you increase, you may lose your eardrum!");
      }
    },
    movie(newValue) {
      console.log(`calling an api with  new value ${newValue}`);
    },
    // movie1(newValue) {
    //   // here api is not called even though movie exist that's why we are using handler,immediateand deep
    //   console.log(`calling an api with  new value ${newValue}`);
    // },
    movie1: {
      handler(newValue, oldValue) {
        console.log(`calling an api with  new value ${newValue}`);
      },
      immediate: true,
    },
    movieInfo: {
      handler(newValue) {
        console.log(
          `calling an api with  new value ${newValue.title} ${newValue.title}`
        );
      },
      deep: true,
    },
    movies: {
      handler(newValue) {
        console.log(`update movies ${newValue}`);
      },
      deep: true,
    },
  },
  computed: {
    buttonName() {
      if (!this.toggleButtons) {
        return "show";
      } else {
        return "hide";
      }
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
</style>
