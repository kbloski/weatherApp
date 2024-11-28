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
:root {
  --background-dark: rgba(34, 79, 131, 0.8);
}

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
  border: 2px solid white;
  background-color: rgba(240, 248, 255, 0.707);
  backdrop-filter: blur(.4rem);
  margin: 0 auto;
  max-width: 1260px;
  min-height: 85vh;
  margin-top: 1rem;
}

@media screen and (max-width: 800px){
  .page-container {
    background: none;
    border: none;
    padding: .5rem;
  }
}
</style>