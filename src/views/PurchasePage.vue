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