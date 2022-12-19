<script setup>
import { ref } from 'vue';
import SiteHeaderVue from '../components/SiteHeader.vue';
import SiteFooter from '../components/SiteFooter.vue';
import SiteModal from '../components/SiteModal.vue';
import axios from "axios";


const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

let data = (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
  params: {
    api_key: "ab590dbfc1eb546b5263a30c390d2d07",
  }
})).data.results;
console.log(data);
</script>

<template>
<SiteHeaderVue/>
  <div class="purchase-container">
    <img v-for="movie in data" class="poster" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
  </div>
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />

</template>

<style>
.purchase-container {
  display: flex;
  flex-direction: column;
  width: 25vw;
  justify-content: space-between;
  height: 200px;
}
</style>