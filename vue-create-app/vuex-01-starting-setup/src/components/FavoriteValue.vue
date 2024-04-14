<template>
  <h3>{{ counter }}</h3>
  <h3>We can do more-----</h3>
</template>
<script>
// import { mapGetters } from 'vuex';
export default {
  computed: {
    counter() {
      return this.$store.getters['numbers/normalizedCounter'];
    },
    // ...mapGetters(['normalizedCounter']),
  },
};
</script>
