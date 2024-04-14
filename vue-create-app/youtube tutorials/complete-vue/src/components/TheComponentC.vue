<template>
  <h3>Thecomponent c</h3>
  <h4>{{ name }}</h4>
  <the-component-d :name="name"></the-component-d>
</template>
<script>
import TheComponentD from "./TheComponentD.vue";
export default {
  components: {
    TheComponentD,
  },
  props: {
    name,
  },
};
</script>
