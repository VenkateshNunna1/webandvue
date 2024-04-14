<template>
  <base-card>
    <header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      <p>{{ infoText }}</p>
    </header>
  </base-card>
</template>

<script scope>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>

<style scoped>
/* section {// we don't need styles any more beacaue we are using base-card(slotss)
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
} */
</style>
