<template>
  <nav class="navbar">
    <router-link class="nav-link" to="/">Home Page</router-link>
    <router-link class="nav-link" to="/thepost">Post</router-link>
    <router-link class="nav-link" to="/createpost">Create Post</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  text-align: center;
  color: red;
  background-color: #f0f0f0;
  padding: 10px;
}

.nav-link {
  margin-right: 20px;
  color: blue;
  text-decoration: none;
  font-weight: bold;
}

.nav-link:hover {
  color: darkblue;
}
</style>
