<template>
  <div id="app">
    <!-- <v-header></v-header> -->
    <!-- <router-view></router-view> -->
    <!-- <v-footer></v-footer> -->
    <!-- <transition name="fade"> -->
    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
// import VHeader from './components/VHeader.vue'
// import VFooter from "./components/VFooter.vue";
export default {
  name: "app",
  components: {
    // VHeader,
    // VFooter
  }
};
</script>

<style>
@import "./common/font/font.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
