<template>
  <form @submit.prevent="submitData">
    <label for="">Name</label>
    <input type="text" v-model="enteredName" />
    <label for="">mobile-number</label>
    <input type="number" v-model="enteredNumber" />
    <label for="">email</label>
    <input type="text" v-model="enteredEmail" />
    <button>Add Contact</button>
  </form>
</template>
<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredNumber: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredNumber,
        this.enteredEmail
      );
    },
  },
};
</script>
