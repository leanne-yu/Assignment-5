<script setup>
import SiteHeaderVue from './components/SiteHeader.vue';
import SiteHeroVue from './components/SiteHero.vue';
import SiteFooterVue from './components/SiteFooter.vue';

</script>

<template>
  <div>
    <RouterView/>
    <SiteHeaderVue/>
    <SiteHeroVue/>
    <SiteFooterVue/>
  </div>
</template>

<style scoped>
</style>
