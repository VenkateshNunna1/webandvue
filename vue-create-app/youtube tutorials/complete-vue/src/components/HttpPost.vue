<template>
  <div>
    <form @submit.prevent="submitPost">
      <div>
        <label for="id">enter user id:</label>
        <input type="text" id="id" v-model="formData.userId" />
      </div>
      <div>
        <label for="title">enter title:</label>
        <input type="text" id="title" v-model="formData.title" />
      </div>
      <div>
        <label for="body">enter body:</label>
        <input type="text" id="body" v-model="formData.body" />
      </div>
      <div>
        <button>Submit Post</button>
      </div>
    </form>
    <p v-if="responseData">{{ responseData }}</p>
    <p v-else>{{ errorMsg }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
      responseData: "",
      errorMsg: "",
    };
  },
  methods: {
    submitPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.formData)
        .then((response) => {
          console.log(response);
          this.responseData = response.data; // Set to response.data
        })
        .catch((error) => {
          console.log(error); // Fix typo
          this.errorMsg = "Data will not be sent to the server";
        });
    },
  },
};
</script>
