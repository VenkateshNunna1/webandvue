<template>
  <h3>Thecomponent D</h3>
  <h4>{{ name }}</h4>
  <the-component-e :name="name"></the-component-e>
</template>
<script>
import TheComponentE from "./TheComponentE.vue";

export default {
  components: {
    TheComponentE,
  },
  props: {
    name,
  },
};
</script>
