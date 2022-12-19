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
  <div class="login-container">
    <form @submit.prevent="login()">
      <h3>Swing into it. Login here!</h3>
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <br />
      <input type="submit" value="Login" />
      <div v-if="error" class="error">
        <p>Incorrect username or password! Get out -> </p>
      </div>
    </form>
  </div>
  <img class="swinging"
    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3789c8c-0874-407c-a457-03b147f59b18/deyfbg3-ceda02cf-d14e-4eca-aba3-b34f4fba7c5d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QzNzg5YzhjLTA4NzQtNDA3Yy1hNDU3LTAzYjE0N2Y1OWIxOFwvZGV5ZmJnMy1jZWRhMDJjZi1kMTRlLTRlY2EtYWJhMy1iMzRmNGZiYTdjNWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7wUXm2TkbzFh0BFd5u4Xhm3fiUd_QTfHqM0Sc-PsQ00"
    width="400" height="500">
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 25vw;
  padding-top: 0%;
}

form input {
  padding: 0.5rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  color: rgb(134, 184, 134);
  background-color: beige;
  border: none;
  margin-bottom: 3%;
}

.login-container {
  display: flex;
  float: left;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-left: 20%;
  margin-top: 0%;
  font-weight: lighter;
  font-size: 28px;
  text-align: center;
  font-family: 'Sigmar One';
  color: rgb(125, 156, 125);
}

.swinging {
  float: right;
  margin-right: 6%;
}
</style>