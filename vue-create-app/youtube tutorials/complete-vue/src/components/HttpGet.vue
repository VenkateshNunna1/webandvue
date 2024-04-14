<template>
  <button @click="getPosts">Load Posts</button>
  <h3 v-if="errorMsg">{{ errorMsg }}</h3>
  <div v-for="post in posts" :key="post.id">
    <h3>{{ post.id }}{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  // created() {
  //   //mounted() //when the web page is loads it will render data fro the server
  //   this.getPosts();
  // },
  data() {
    return {
      posts: [],
      errorMsg: "",
    };
  },
  methods: {
    getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errorMsg = "some error is getting in the background";
        });
    },
  },
};
</script>
<style scoped></style>
