<script setup>
import SiteHeaderVue from '../components/SiteHeader.vue';
import SiteFooterVue from '../components/SiteFooter.vue';
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);
const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("/Purchase");
  } else {
    error.value = true;
  }
};
</script>