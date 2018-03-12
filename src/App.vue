<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
    name: 'App',
    components: {
        Nav
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
html,
body {
    height: 100%;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(to bottom right, #480844, #07455e);
}
#app {
    height: 100%;
    width: 100%;
}
</style>
