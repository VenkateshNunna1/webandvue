<!-- PostForm.vue -->
<template>
  <div>
    <h1 v-if="isDataSubmitted">Data is Sent to the server</h1>
    <form @submit.prevent="postData">
      <div>
        <label for="name">Enter Name:</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="number">Enter Mobile Number:</label>
        <input type="text" id="number" v-model="number" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      number: "",
      isDataSubmitted: false,
    };
  },
  methods: {
    postData() {
      axios
        .post(
          "venky.json",
          {
            name: this.name,
            number: this.number,
          },
          {
            // headers: {
            //   venky: "venky web dev",
            // },
          }
        )
        .then((response) => {
          this.isDataSubmitted = true;
          console.log("Data sent successfully:", response.data);
          // Emit an event to trigger data fetching in another component
          this.$emit("postcreated");
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });
    },
  },
};
</script>
