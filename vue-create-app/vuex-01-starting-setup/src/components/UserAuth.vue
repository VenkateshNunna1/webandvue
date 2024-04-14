<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
</template>

<script>
export default {
  methods: {
    login() {
      return this.$store.dispatch('logIn');
    },
    logout() {
      return this.$store.dispatch('logOut');
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>
