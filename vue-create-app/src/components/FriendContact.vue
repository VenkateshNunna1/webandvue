<template>
  <ul>
    <li>
      <strong>NAME:</strong>{{ name }}{{ isFavorite ? "(favorite)" : "" }}
    </li>
    <button @click="toggleFavorite">toggle favorite</button>
    <button @click="toggleButton">{{ buttonContent }} Details</button>
    <button @click="deleteFriend">delete</button>
    <ul v-if="detailsAreVisible">
      <li><strong>PHONE-NUMBER:</strong>{{ mobileNumber }}</li>
      <li><strong>EMAIL:</strong>{{ emailAddress }}</li>
      <li>{{ isFavorite }}</li>
    </ul>
    <ul v-else>
      <common-styling>here is the details</common-styling>
    </ul>
  </ul>
</template>

<script>
export default {
  // props: ["name", "mobileNumber", "emailAddress", "isFavorite"], // whenever you are adding prop to the app.vue and you have to add prop here also
  //validating props
  emits: ["toggle - favorite"], // here we can mention how many emits or custom events created
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false, // default property can be use as function
      // validator: function (value) {
      //   //isFavorite will give the current value that value we are passing in the function
      //   return value === "1" || value === "0";
      // },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleButton() {
      return (this.detailsAreVisible = !this.detailsAreVisible);
    },

    toggleFavorite() {
      this.$emit("toggle-favorite", this.name, this.id); //we can pass n no of parameters here
    },

    deleteFriend() {
      this.$emit("delete", this.id);
    },
  },
  computed: {
    buttonContent() {
      if (this.detailsAreVisible) {
        return "hide";
      } else {
        return "show";
      }
    },
  },
};
</script>
