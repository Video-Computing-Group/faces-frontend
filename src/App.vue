<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style>
@font-face {
  font-family: GlacialIndifference;
  src: url(/static/fonts/GlacialIndifference-Regular.otf);
}
@import url('https://fonts.googleapis.com/css?family=Oswald:400,500');
html,
body {
  height: 100%;
  width: 100%;
  font-family: 'GlacialIndifference', 'Oswald', sans-serif;
  background: linear-gradient(to bottom right, #480844, #07455e);
}
#app {
  height: 100%;
  width: 100%;
}
</style>
