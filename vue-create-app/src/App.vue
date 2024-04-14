<template>
  <the-header></the-header>
  <new-friend @add-contact="addContact"></new-friend>
  <section>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :mobile-number="friend.mobileNumber"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="delFriend"
      ></friend-contact>
    </ul>
  </section>
  <button @click="setSelectedComponent('active-goals')">Active Goals</button>
  <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
  <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
  <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
  <keep-alive>
    <component :is="selectedComponent"></component>
  </keep-alive>
</template>

<script>
//local registring the component
import TheHeader from "./components/HeaderCom.vue";
import ManageGoals from "./components/ManageGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";

export default {
  components: {
    "the-header": TheHeader,
    "active-goals": ActiveGoals,
    "manage-goals": ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      friends: [
        {
          id: 1,
          name: "venkatesh",
          mobileNumber: 6309875788,
          email: "venky@gamil.com",
          isFavorite: true,
        },
        {
          id: 2,
          name: "ganesh",
          mobileNumber: 9652717037,
          email: "gani@gamil.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    // toggleFavoriteStatus() {
    //   alert("this works");
    // },
    toggleFavoriteStatus(friendName) {
      const identifiedFriend = this.friends.find((friend) => {
        return friend.name === friendName; // Add return statement here
      });
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addContact(name, number, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        mobileNumber: number,
        email: email,
        isFavorite: false,
      };
      this.friends.push(newFriendContact);
    },
    // delFriend(id) {
    //   this.friends = this.friends.shift(id);
    // },
    delFriend(friendId) {
      this.friends = this.friends.filter((friend) => {
        return friend.id !== friendId;
      });
    },
    setSelectedComponent(com) {
      this.selectedComponent = com;
    },
  },
  computed: {},
  watch: {},
};
</script>
<style>
section {
  background-color: aquamarine;
}
the-header {
  background-color: #3498db;
  color: white;
}
</style>
