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
html,
body {
  height: 100%;
  width: 100%;
  font-family: "GlacialIndifferenceRegular", sans-serif;
  background: linear-gradient(to bottom right, #480844, #07455e);
}
#app {
  height: 100%;
  width: 100%;
}
p {
  font-family: "GlacialIndifferenceRegular", sans-serif;
  font-size: 1.2em;
  color: black;
}
</style>
