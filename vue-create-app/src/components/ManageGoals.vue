<template>
  <h3>Manage Goals</h3>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>Input is invalid!</h2>
      <p>please enter at least a few charactrs....</p>
      <button @click="confirmError">okay</button>
    </error-alert>
  </teleport>
</template>
<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
