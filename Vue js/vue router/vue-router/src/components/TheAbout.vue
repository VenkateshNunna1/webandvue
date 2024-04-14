<template>
  <h1>About</h1>
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
