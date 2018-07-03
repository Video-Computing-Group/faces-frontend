<template>
    <div class="text-body alternative">
      <img class="offset" src="/static/49DeMedici.jpg" alt="">
      <p class="caption offset">
        Different images by the same artist (Francois Clouet) of the same individual (Catherine de'Medici).
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
  background: #17375e;
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
  background-color: #17375e;
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
  color: white !important;
  font-family: 'Sorts Mill Goudy', serif !important;
  font-size: 1em;
}
</style>
