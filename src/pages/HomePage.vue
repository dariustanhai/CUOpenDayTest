<script setup>
import HeroComponent from "../components/HomeHeroComponent.vue";
import BreadcrumbsComponent from "../components/BreadcrumbsComponent.vue";
import HomeArticlesComponent from "../components/HomeArticlesComponent.vue";
import HomeVenueComponent from "../components/HomeVenueComponent.vue";
import HomeSummaryComponent from "../components/HomeSummaryComponent.vue";
import HomeEventsComponent from "../components/HomeEventsComponent.vue";
</script>

<template>
  <BreadcrumbsComponent></BreadcrumbsComponent>
  <HeroComponent></HeroComponent>
  <main>
    <HomeSummaryComponent></HomeSummaryComponent>
    <HomeEventsComponent></HomeEventsComponent>
    <HomeArticlesComponent></HomeArticlesComponent>
    <HomeVenueComponent></HomeVenueComponent>
  </main>
</template>
