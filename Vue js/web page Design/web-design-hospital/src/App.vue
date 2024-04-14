<template>
  <div class="body">
    <the-header> </the-header>
    <the-nav></the-nav>
    <the-section></the-section>
    <the-sectionn></the-sectionn>
    <the-article></the-article>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheNav from "./components/TheNav.vue";
import TheSection from "./components/TheSection.vue";
import TheSectionn from "./components/TheSectionn.vue";
import TheArticle from "./components/TheArticle.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheNav,
    TheSection,
    TheSectionn,
    TheArticle,
    TheFooter,
  },
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
}
.body {
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 10px;
}
</style>
