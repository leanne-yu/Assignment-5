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
        
        <div class="description">
          
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
  width: clamp(300px, 100%, 900px);
  height: 500px;
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

.description {

  font-size: 20px;
}
</style>
