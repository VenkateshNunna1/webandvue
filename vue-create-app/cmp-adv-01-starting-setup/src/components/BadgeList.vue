<template>
  <base-card>
    <h2>Available Badges</h2>
    <ul>
      <li>
        <base-badge type="admin" caption="ADMIN"></base-badge>
      </li>
      <li>
        <base-badge type="author" caption="AUTHOR"></base-badge>
      </li>
    </ul>
  </base-card>
</template>

<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
/* section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
} */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
