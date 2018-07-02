<template>
    <div class="hero">
        <div class="hero-child-container">
        <h1 class="hero-child">FACES:</h1>
        <h3 class="hero-child">Faces, Art, and Computerized Evaluation Systems</h3>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero {
  min-height: 500px;
  width: 100%;
  background: url("/static/hero.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: end;
}
.hero {
  font-size: 3em;
}
.hero-child {
  width: 100%;
}
h1.hero-child {
  font-weight: 700 !important;
}
h3.hero-child {
  font-weight: 700 !important;
}
.hero-child-container {
  background: rgba(0,0,0,.65);
  width: 100%;
  padding-top: 10px;
  padding-left: 10%;
  padding-bottom: 70px;
}

</style>
