<template>
  <ul>
    <h2>name:{{ userName }}</h2>
    <h3>age:{{ userAge }}</h3>
  </ul>
</template>
<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    userAge: {
      type: Number,
      required: true,
    },
  },
};
</script>
