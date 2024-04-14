<template>
  <div>
    <h4>Hello {{ name }}</h4>
    <h5>he is working as {{ occupation }}</h5>
  </div>
</template>
<script>
export default {
  //props:['name','occupation'] //normal way declaring props
  props: {
    //declaring prop validations
    name: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      name1: "venky",
    };
  },
};
</script>
<style lang=""></style>
