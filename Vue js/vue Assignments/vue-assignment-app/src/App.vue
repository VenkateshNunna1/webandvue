<template>
  <ul>
    <user-data @submit-data="submitData"></user-data>
    <active-user
      :user-name="persons.name"
      :user-age="persons.age"
    ></active-user>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      persons: {
        name: "venkatesh",
        age: 21,
      },
    };
  },
  methods: {
    submitData(name, age) {
      this.persons = {
        name: name,
        age: age,
      };
    },
  },
};
</script>
