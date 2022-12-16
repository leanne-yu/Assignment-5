<script setup>
import SiteHeaderVue from './components/SiteHeader.vue';
import SiteHeroVue from './components/SiteHero.vue';
import SiteFooterVue from './components/SiteFooter.vue';

</script>

<template>
  <div class="app-container">
    <Suspense>
      <RouterView/>
    </Suspense>
  </div>
</template>

<style scoped>
</style>
