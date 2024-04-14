<template>
  <h1>The Chennai</h1>
  <button @click="submit">Go Back</button>
</template>
<script>
export default {
  methods: {
    submit() {
      this.$router.push("/home");
    },
  },
};
</script>
