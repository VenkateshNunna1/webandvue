<template>
  <div>
    <h1>Create Post</h1>
    <table border="1px" class="post-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in postDetails" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
          <td>
            <button>
              <router-link :to="`/thepost/${post.id}`"
                >Show details</router-link
              >
              <!-- <dynamicrouting > -->
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      postDetails: [],
    };
  },
  mounted() {
    axios
      .get("venky.json")
      .then((response) => {
        console.log(response.data);
        this.formatPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },

  methods: {
    formatPosts(postsData) {
      for (let key in postsData) {
        this.postDetails.push({
          id: key,
          ...postsData[key],
        });
      }
    },
  },
};
</script>

<style scoped></style>
