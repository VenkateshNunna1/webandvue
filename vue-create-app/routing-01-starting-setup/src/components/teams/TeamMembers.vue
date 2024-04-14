<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team t2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  props: ['teamId'], //the value got from main.js there is a value we set Props as true
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  inject: ['teams', 'users'],
  methods: {
    loadTeamMembers(teamId) {
      // const teamId = route.params.teamId; // it is used to retrieve data /fetch data from url
      const selectedTeam = this.teams.find((team) => {
        return team.id === teamId;
      });
      console.log(selectedTeam);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find((user) => {
          return user.id === member;
        });
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    // this.loadTeamMembers(this.$route);
    this.loadTeamMembers(this.teamId);
    console.log(this.$route.query);
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next();
  },
  watch: {
    // $route(newRoute) {
    //   this.loadTeamMembers(newRoute);
    // },
    teamId(newId) {
      this.loadTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
