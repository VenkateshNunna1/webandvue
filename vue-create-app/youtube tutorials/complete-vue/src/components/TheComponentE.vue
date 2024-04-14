<template>
  <h3>TheComponent E</h3>
  <h4>{{ name }}</h4>
  <h1>
    {{ userName }}
  </h1>
  <h5>{{ role }}</h5>
</template>
<script>
export default {
  inject: ["userName", "role"],
  props: {
    name,
  },
};
</script>
<style></style>
