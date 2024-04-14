<template>
  <the-navigation></the-navigation>
  <router-view></router-view>
</template>
<script>
import TheNavigation from "./components/TheNavigation.vue";
export default {
  components: {
    TheNavigation,
  },
};
</script>
<style>
.rout1,
.rout2,
.rout3,
.rout4,
.rout5 {
  margin-left: 10px;
}
div {
  text-align: center;
}
</style>
