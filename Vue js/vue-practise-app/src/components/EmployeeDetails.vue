<template>
  <ul>
    <li>{{ name }} {{ isSalaryCredited ? "(sal credited)" : "" }}</li>
    <button @click="showDetails">{{ buttonContent }} details</button>
    <button @click="toggleSalary">Sal credited</button>
    <button @click="deleteData">Delete Data</button>
    <ul v-if="showHideDetails">
      <li>{{ email }}</li>
      <li>{{ mobileNumber }}</li>
      <li>{{ salary }}</li>
      <li>{{ isSalaryCredited }}</li>
    </ul>
    <h6 v-else>
      Right,now details are in hide mode,if you want to watch details click on
      the above button
    </h6>
  </ul>
</template>
<script>
export default {
  emits: ["sal-credit", "del-data"],
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    isSalaryCredited: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      showHideDetails: false,
    };
  },
  methods: {
    showDetails() {
      return (this.showHideDetails = !this.showHideDetails);
    },
    toggleSalary() {
      this.$emit("sal-credit", this.id);
    },
    deleteData() {
      this.$emit("del-data", this.id);
    },
  },
  computed: {
    buttonContent() {
      if (this.showHideDetails) {
        return "hide";
      } else {
        return "show";
      }
    },
  },
};
</script>
