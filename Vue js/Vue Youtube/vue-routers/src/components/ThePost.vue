<template>
  <div class="post-form">
    <h1>The Post</h1>
    <form @submit.prevent="postData">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="description"></textarea>
      </div>
      <div class="form-group">
        <button type="submit">Create Post</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    postData() {
      axios
        .post("venky.json", {
          title: this.title,
          description: this.description,
        })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/createpost");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.post-form {
  text-align: center;
  margin: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

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
