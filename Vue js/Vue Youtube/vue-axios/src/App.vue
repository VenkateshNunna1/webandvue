<template>
  <article>
    <div>
      <http-post @postcreated="onCreatePost"></http-post>
    </div>
    <div>
      <http-get v-if="showPosts"></http-get>
    </div>
  </article>
</template>

<script>
import HttpPost from "./components/HttpPost.vue";
import HttpGet from "./components/HttpGet.vue";
export default {
  data() {
    return {
      showPosts: true,
    };
  },
  components: {
    HttpPost,
    HttpGet,
  },
  methods: {
    onCreatePost() {
      this.showPosts = false;
      setTimeout(() => {
        this.showPosts = true;
      }, 1000);
    },
  },
};
</script>
<style>
article {
  text-align: center;
}
</style>
