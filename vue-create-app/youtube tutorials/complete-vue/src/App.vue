<template>
  <div>
    <the-watchers></the-watchers>
    <h1>Component & Props concept</h1>
    <the-props id="venkatesh" name="ganesh" occupation="student"></the-props>
    <the-props name="venkatesh" occupation="intern"></the-props>
    <the-props name="sudhi" occupation="Software developer"></the-props>
    //above are static props
    <the-props :name="human.name" :occupation="human.profession"></the-props>
    //above are dynamic props
  </div>

  <h1>Provide And Inject ApI</h1>
  <the-component-c :name="name"></the-component-c>
  <div>
    <h1>Custom events</h1>
    <button @click="showPopup = true">Show popup</button>
    <pop-up v-if="showPopup" @close="closepopup"></pop-up>
  </div>
  <div>
    <h1>Custom component</h1>
    <custom-component value="gani" v-model="serName"></custom-component>
  </div>
  <div>
    <h1>Slots</h1>
    <base-button>submit</base-button>
    <base-button></base-button>
    <base-button>increase</base-button>
  </div>
  <div>
    <h1>Named Slots</h1>
    <base-card>
      <template v-slot:footer>
        <h1>This is footer area</h1>
      </template>
      <template v-slot:header>
        <h1>This Is Header</h1>
      </template>
      <template v-slot:default>
        <h1>This is section area</h1>
      </template>
    </base-card>
  </div>
  <div>
    <h1>slot props</h1>
    <name-list>
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }}{{ slotProps.lastName }}
      </template>
    </name-list>
    <name-list>
      <template v-slot:default="slotProps">
        {{ slotProps.lastName }} {{ slotProps.firstName }}
      </template>
    </name-list>
    <name-list>
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }}
      </template>
    </name-list>
  </div>
  <div>
    <h3>Get Http Response From Axios</h3>
    <http-get></http-get>
  </div>
  <div>
    <h1>HTTP post Data</h1>
    <http-post></http-post>
  </div>
</template>
<script>
import TheWatchers from "./components/TheWatchers.vue";
import TheProps from "./components/TheProps.vue";
import TheComponentC from "./components/TheComponentC.vue";
import PopUp from "./components/PopUp.vue";
import CustomComponent from "./components/CustomComponent.vue";
import BaseButton from "./components/BaseButton.vue";
import BaseCard from "./components/BaseCard.vue";
import NameList from "./components/NameList.vue";
import HttpGet from "./components/HttpGet.vue";
import HttpPost from "./components/HttpPost.vue";

export default {
  components: {
    TheWatchers,
    TheProps,
    TheComponentC,
    PopUp,
    CustomComponent,
    BaseButton,
    BaseCard,
    NameList,
    HttpGet,
    HttpPost,
  },
  data() {
    return {
      showPopup: false,
      name: "venkata ganesh",
      name1: "pavan",
      role1: "intern",
      serName: "",
      human: {
        name: "pavan",
        profession: "senior analyst",
      },
    };
  },
  // provide: {
  //   userName: "venkatesh",
  // },
  provide() {
    return {
      userName: this.name1,
      role: this.role1,
    };
  },
  methods: {
    closepopup(name) {
      this.showPopup = false;
      console.log(name);
    },
  },
};
</script>
<style>
div {
  text-align: center;
}
</style>
