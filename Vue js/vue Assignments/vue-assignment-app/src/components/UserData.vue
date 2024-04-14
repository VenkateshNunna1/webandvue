<template>
  <form action="" @submit.prevent="submitData">
    <label for="">Name</label>
    <input type="text" v-model="name" />
    <label for="">Age</label>
    <input type="number" v-model="age" />
    <button>submit</button>
  </form>
</template>
<script>
export default {
  emits: ["submit-data"],
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("submit-data", this.name, this.age);
    },
  },
};
</script>
