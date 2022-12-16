<script setup>
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1>{{ props.id }}</h1>
      </div>
    </div>
  </Teleport>
</template>
 
<style scoped>

</style>
