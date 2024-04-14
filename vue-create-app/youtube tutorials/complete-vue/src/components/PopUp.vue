<template>
  <h1>This is pop up</h1>
  <button @click="events">Close popup</button>
</template>
<script>
export default {
  emits: ["close"],
  data() {
    return {};
  },
  methods: {
    events() {
      this.$emit("close", "venkatesh");
    },
  },
};
</script>
