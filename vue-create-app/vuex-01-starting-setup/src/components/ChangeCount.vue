<template>
  <button @click="increment">Add 10</button>
  <button @click="increase({ value: 12 })">Add 12</button>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   // this.$store.commit('increase', {
    //   //   value: 10,
    //   // });
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    // },
    ...mapActions('numbers', ['increase', 'increment']),
    //2nd way
    // ...mapActions({
    //   inc: 'increment',
    //   increase: 'increase',
    // }),
  },
};
</script>
