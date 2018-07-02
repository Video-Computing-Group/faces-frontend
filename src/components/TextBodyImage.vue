<template>
    <div class="text-body alternative">
      <img class="offset" src="/static/homedemo.jpg" alt="">
      <p class="caption offset">
          Corpernicus (1473 - 1543) is one of the great figures in the history of science but all original portraits of him are believed to be lost. In 1976 the local Paduan art historian Sergio Bettini suggested in an Italian paper that Copernucus is depicted in a fresco by Giulio Campagnola in the Scoletta del Carmine in Padua.
      </p>
      <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sorts+Mill+Goudy');
.text-body {
  background: white;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 10px;
  padding-bottom: 200px;
  text-align: center;
}
.text-body p {
  width: 100%;
  top: -150px;
  position: relative;
  text-align: justify;
  color: #121212;
}
.text-body h2 {
  padding-top: 50px;
  margin-bottom: 20px;
  text-transform: uppercase;
  width: 100%;
  top: -150px;
  position: relative;
}
.alternative {
  background-color: #d6d4ca;
  padding-bottom: 10px;
}
.offset {
  width: 100%;
  top: -150px;
  position: relative;
}
.caption {
  padding-top: 10px;
  text-align: center !important;
  color: black !important;
  font-family: 'Sorts Mill Goudy', serif;
  font-size: 1em;
}
</style>
