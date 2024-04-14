<template>
  <h1>Show post</h1>
  <div>
    <h3>Id:{{ id }}</h3>
    <h3>Title:{{ post.title }}</h3>
    <h3>Description:{{ post.description }}</h3>
    <router-link to="/thepost/-NrdD8t9CZxCQBDA5t3S"
      >go to this link-NrdD8t9CZxCQBDA5t3S</router-link
    >
  </div>
  <button @click="goBack">Go Back</button>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      post: "",
      id: "",
    };
  },
  watch: {
    // react to route param  content changes on the same page using watchers
    $route() {
      this.getPostDetails();
    },
  },
  created() {
    this.getPostDetails();
  },
  methods: {
    goBack() {
      this.$router.push("/createpost");
    },
    getPostDetails() {
      this.id = this.$route.params.id;
      axios.get(`venky.json?id=${this.id}`).then((response) => {
        console.log(response.data);
        this.post = response.data[this.id];
      });
    },
  },
};
</script>
<style scoped>
button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}
</style>
