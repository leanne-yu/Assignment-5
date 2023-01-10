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
        <img class="modalPoster" :src="`https://image.tmdb.org/t/p/w500/${data.poster_path}`" width="275" height="425" alt="movie poster" />
        <div class="description">
          <h1>{{ data.title }}</h1>
          <h3>{{ data.tagline }}</h3>
          <h3>{{ data.release_date }}</h3>
          <iframe width="400" height="250" id="trailer" :src="`https://www.youtube.com/embed/${data.videos.results[0].key}`" frameborder="0"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </Teleport>
</template>
 
<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: ivory;
  color: rgb(141, 187, 141);
  width: clamp(400px, 100%, 800px);
  height: 475px;
  position: relative;
  border: solid;
  border-color: ivory;
  border-radius: 2%;
  text-align: center;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: ivory;
  font-weight: bold;
  font-size: 1.25rem;
  color: rgb(141, 187, 141);
}

.close-button {
  margin-top: 0%;
}

.description {
  font-size: 25px;
}

.modalPoster{
  float: left;
  padding: 3%;
  }

h1 {
  font-family: "Fredoka One";
  font-size: 31px;
  text-align: center;
  margin-right: 6%;
}

#trailer {
  margin-right: 2%;
  margin-top: 1%;
}
</style>
