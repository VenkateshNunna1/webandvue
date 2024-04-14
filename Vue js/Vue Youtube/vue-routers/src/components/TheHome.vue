<template>
  <div class="center-content">
    <h1>The Home</h1>
    <button @click="move">go to post data</button>
  </div>
</template>
<script>
export default {
  methods: {
    move() {
      this.$router.push("/thepost");
    },
  },
};
</script>
<style scoped>
.center-content {
  text-align: center;

  /* Adjust as needed */
}
</style>
