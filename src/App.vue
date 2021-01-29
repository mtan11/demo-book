<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <app-header title="BOOK STORE"></app-header>
    <app-modal-detail></app-modal-detail>
    <app-modal-cart></app-modal-cart>
    <router-view />
  </div>
</template>

<script>
import HeaderVue from './components/Header.vue';
import ModalDetailVue from './components/ModalDetail.vue';
import YourCartVue from './components/YourCart.vue';

export default {
  name: 'App',
  components: {
    appHeader: HeaderVue,
    appModalDetail: ModalDetailVue,
    appModalCart: YourCartVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303030;
  background-color: #f5f5f5;
}
body {
   background-color: #f5f5f5 !important;
}

</style>
