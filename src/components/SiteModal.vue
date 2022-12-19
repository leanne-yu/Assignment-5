<script setup>
import axios from 'axios';

const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

let data = (await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
  params: {
    api_key: "ab590dbfc1eb546b5263a30c390d2d07",
    append_to_response: "videos",
  }
})).data;
console.log(data);
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
        <h1>{{ data.title }}</h1>
      
      </div>
    </div>
  </Teleport>
</template>
 
<style scoped>

</style>
