<script setup>
import SiteHeaderVue from '../components/SiteHeader.vue';
import SiteHeroVue from '../components/SiteHero.vue';
import SiteFooterVue from '../components/SiteFooter.vue';
</script>

<template>
  <Suspense>
  <RouterViewVue/>
  </Suspense>
  <Suspense>
  <SiteHeaderVue/>
  </Suspense>
  <Suspense>
  <SiteHeroVue/>
  </Suspense>
  <Suspense>
  <SiteFooterVue/>
  </Suspense>
</template>

<style>

</style>