<template>
  <h1 v-for="person in persons" :key="person.id">
    <slot :firstName="person.firstName" :lastName="person.lastName"></slot>
  </h1>
</template>
<script>
export default {
  data() {
    return {
      persons: [
        {
          id: 1,
          firstName: "venkatesh",
          lastName: "nunna",
        },
        {
          id: 2,
          firstName: "Ganesh",
          lastName: "nu7nna",
        },
      ],
    };
  },
};
</script>
