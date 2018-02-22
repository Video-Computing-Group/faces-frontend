<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom right, #480844, #07455e);
}
#app {
  height: 100%;
  width: 100%;
}
</style>
