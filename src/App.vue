<template>
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
}

.page-container {
  margin: 0 auto;
  max-width: 1260px;
}
</style>