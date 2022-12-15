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

<template>
  <SiteHeaderVue />
  <div class="home-container">
    <form @submit.prevent="login()">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <input type="submit" value="Login" />
      <div v-if="error" class="error">
        <p>Incorrect username/password! Get out</p>
      </div>
    </form>
  </div>
  <SiteFooterVue />
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  form input {
    padding: 1%;
  }
  .home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  }
  </style>