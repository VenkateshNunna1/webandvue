<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    loadExperiences() {
      fetch(
        'https://vue-http-project-9c8f7-default-rtdb.firebaseio.com/gani.json',
        // {
        //   // method: 'GET',//for getting we don't need to mention
        //   // headers: {
        //   //   'Content-Type': 'application/json',
        //   // },
        //   // body: JSON.stringify({//body also not need
        //   //   name: this.enteredName,
        //   //   rating: this.chosenRating,
        //   // }),
        // }
      );
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
