<script setup>
</script>

<template>
  <div class="shrekHead">
    <img
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b897766f-cc7f-4fb1-b43d-e860484395e3/db4reoe-1790b1fb-98b7-446f-9318-4fc9aacf89e0.png/v1/fill/w_420,h_420,strp/shrek_head_png_by_darkwoodsx_db4reoe-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDIwIiwicGF0aCI6IlwvZlwvYjg5Nzc2NmYtY2M3Zi00ZmIxLWI0M2QtZTg2MDQ4NDM5NWUzXC9kYjRyZW9lLTE3OTBiMWZiLTk4YjctNDQ2Zi05MzE4LTRmYzlhYWNmODllMC5wbmciLCJ3aWR0aCI6Ijw9NDIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.MqiUM2IaHEw6OrZoYAWsvkmwrVmK6O2oiXoijT5De8E"
      width="175" height="175" />
  </div>
  <div class="title">
    <h1>Shrek's Movie Shack</h1>
  </div>

  <RouterLink to="/Login" custom v-slot="{ navigate }">
    <button @click="navigate" role="link">Login</button>
  </RouterLink>
</template>

<style>
body {
  background-color: ivory;
  margin: 0%;
}

.title {
  display: flex;
  justify-content: Left;
  color: rgb(141, 187, 141);
  font-size: 40px;
  margin-bottom: 0%;
  font-family: 'Fredoka One';
}

button {
  display: flex;
  position: relative;
  background-color: rgb(134, 184, 134);
  margin-left: 5%;
  padding: 15px 32px;
  font-size: medium;
  border: none;
}

.shrekHead {
  display: flex;
  float: left;
  padding: 0%;
  margin-left: 3%;
}
</style>