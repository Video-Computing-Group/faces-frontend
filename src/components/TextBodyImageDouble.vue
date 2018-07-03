<template>
    <div class="text-body alternative">
      <img class="offset" src="/static/163CharlesIIEngland.jpg" alt="">
      <p class="caption offset">
        Charles II of England
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
  background-color: white;
  padding-bottom: 10px;
}
.offset {
  width: 100%;
  top: -150px;
  position: relative;
}
</style>
