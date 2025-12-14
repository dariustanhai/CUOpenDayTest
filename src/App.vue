<script setup lang="ts">
import FooterComponent from "./components/FooterComponent.vue";
import NavComponent from "./components/NavComponent.vue";
</script>

<template>
  <NavComponent></NavComponent>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>

<style src="./style.css"></style>
