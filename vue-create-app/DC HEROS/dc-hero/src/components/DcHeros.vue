<template>
  <div>
    <header>Tollywood Heroes</header>
    <form @submit.prevent="addNewHero">
      <label for="heroName">Add New Hero:</label>
      <input type="text" v-model.trim="inputHero" id="heroName" />
      <button type="submit">Add New Hero</button>
    </form>
    <ul>
      <li v-for="(hero, index) in Heros" :key="hero.id">
        {{ hero.name }} <button @click="remove(index)">x</button>
      </li>
    </ul>
    <h5>The length of heroes list: {{ countHeros }}</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputHero: "",
      Heros: [],
    };
  },
  methods: {
    addNewHero() {
      const newHero = {
        id: new Date().toISOString(),
        name: this.inputHero,
      };
      if (this.inputHero !== "") this.Heros.unshift(newHero);
      this.inputHero = ""; // Clear the input field after adding a hero
    },
    remove(index) {
      this.Heros = this.Heros.filter((hero, i) => {
        return i !== index;
      });
    },
  },
  computed: {
    countHeros() {
      return this.Heros.length;
    },
  },
};
</script>
