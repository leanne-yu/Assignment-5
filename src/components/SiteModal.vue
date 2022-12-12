<script setup>
import { ref } from 'vue';
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
</script>
 
<template>
    <div>
        <h1>Login</h1>
        <button @click="openModal(5000)">Modal</button>
    </div>
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
</template>
 
<style scoped>

</style>
