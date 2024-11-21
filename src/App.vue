<template>
  <div class="page-background"></div>
  <the-header></the-header>
  <div class="page-container">
      <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  height: aout;
  max-width: 100vw;
  min-height: 100%;
  margin: 0;
  padding: 0;
  width: auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif
}

.page-background {
  background: url("../public/background-image.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: -1;
  
}

.page-container {
  margin: 0 auto;
  max-width: 1260px;
}
</style>