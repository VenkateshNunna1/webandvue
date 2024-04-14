<template>
  <form action="" @submit.prevent="insertData">
    <label for="">Name:</label>
    <input type="text" v-model="name" />
    <label for="">email:</label>
    <input type="text" v-model="email" />
    <label for="">mobile-number:</label>
    <input type="number" v-model="mobileNumber" />
    <label for="">salary:</label>
    <input type="number" v-model="salary" />
    <button>Submit</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      mobileNumber: "",
      salary: "",
    };
  },
  methods: {
    insertData() {
      this.$emit(
        "insert-data",
        this.name,
        this.email,
        this.mobileNumber,
        this.salary
      );
    },
  },
};
</script>
