<script setup>
import axios from 'axios';
import { ref } from 'vue';
import SiteHeader from '../components/SiteHeader.vue';
import SiteModal from '../components/SiteModal.vue';


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

</script>

<template>
  <SiteHeader />
  <div class="purchase-container">
    <img v-for="movie in data" @click="openModal(movie.id)" class="poster"
     :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
  </div>
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />

</template>

<style>
.purchase-container {
  display: flex;
  flex-wrap: wrap;
}

.purchase-container>.poster {
  max-height: 42.5vh;
  max-width: 42.5vw;
  margin-left: 4%;
  margin-bottom: 2%;
  border: solid;
  border-width: 20%;
  border-radius: 4%;
  border-color: rgb(151, 186, 151);
}
</style>