<template>
  <div v-if="isShown">
    <h1>Data from Firebase</h1>
    <div v-for="data in fetchData" :key="data.id">
      <!-- <p>ID: {{ data.id }}</p> -->
      <p>Name: {{ data.name }}</p>
      <p>Number: {{ data.number }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isShown: false,
      fetchData: [],
    };
  },
  mounted() {
    this.getDataFromFirebase();
  },
  methods: {
    async getDataFromFirebase() {
      try {
        this.isShown = true;
        const response = await axios.get("venky.json");
        console.log(response.data);
        this.formatFetchedData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    formatFetchedData(data) {
      for (let key in data) {
        console.log("key is", key);
        this.fetchData.push({ id: key, ...data[key] });
      }
    },
  },
};
</script>

<style scoped>
/* Add your component styles here if needed */
</style>
