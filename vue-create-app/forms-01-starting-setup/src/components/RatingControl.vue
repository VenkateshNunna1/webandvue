<template>
  <ul>
    <li :class="{ active: activeOption === 'Poor' }">
      <button type="button" @click="activate('Poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'Average' }">
      <button type="button" @click="activate('Average')">Average</button>
    </li>
    <li :class="{ active: activeOption === 'Great' }">
      <button type="button" @click="activate('Great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      activeOption: null,
    };
  },
  methods: {
    activate(option) {
      this.activeOption = option;
    },
  },
};
</script>

<style scoped>
.active {
  background-color: yellow; /* You can customize the highlighting style */
}
</style>
