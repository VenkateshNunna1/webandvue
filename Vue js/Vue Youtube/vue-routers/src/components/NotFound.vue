<template>
  <div>
    <h1 class="not-found-title animated bounce">Page Not Found</h1>
    <div class="broken-thread animated swing"></div>
    <div class="move-to-page">
      <router-link to="/" class="animated fadeIn"
        >Move to a Different Page</router-link
      >
    </div>
  </div>
</template>

<style scoped>
.not-found-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #ff3333; /* Red color */
}

.broken-thread {
  width: 100px;
  height: 2px;
  background-color: #666; /* Gray color for the thread */
  margin: 20px auto;
  position: relative;
}

.move-to-page {
  text-align: center;
}
</style>

<script>
import "animate.css";
export default {
  // your component logic
};
</script>
