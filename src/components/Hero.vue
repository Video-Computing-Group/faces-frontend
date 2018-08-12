<template>
    <div class="hero">
        <div class="hero-child-container">
        <h1 class="hero-child">FACES:</h1>
        <h3 class="hero-child">Faces, Art, and Computerized Evaluation Systems Face recognition evaluation for works of portrait art</h3>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  font-family: "GlacialIndifferenceBold", serif;
  min-height: 90vh;
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
h1 {
  font-size: 4em !important;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
h3 {
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  opacity: 0.8;
}
.hero-child {
  width: 100%;
}
h1.hero-child {
  font-weight: 700 !important;
  font-size: 60px;
}
h3.hero-child {
  font-weight: 700 !important;
  font-size: 35px;
}
.hero-child-container {
  background: rgba(0, 0, 0, 0.65);
  width: 100%;
  padding-top: 10px;
  padding-left: 10%;
  padding-bottom: 15vh;
}
</style>
