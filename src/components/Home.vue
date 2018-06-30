<template>
  <div id="home">
    <div class="hero">
      <div class="hero-child-container">
        <h1 class="hero-child">FACES:</h1>
        <h3 class="hero-child">Faces, Art, and Computerized Evaluation Systems</h3>
      </div>
    </div>
    <div class="text-body">
      <h2>Face Recognition Evaluation for Works of Portrait Art</h2>
      <p>
        FACES 2.0 is a face recognition application based on a method of machine learning known as a deep neural networking.  Funded by National Endowment for the Humanities (NEH) and the Samuel H. Kress Foundation, it is designed to automatically test the degree of probability of a shared identification between different works of portrait art.  Portrait art does not provide what might be called a photographic likeness but rather are subject to the subjectivity of artistic interpretation.  It is an integration of this dynamic into the face recognition algorithm that distinguishes FACES from traditional (photographic) face recognition processes.
      </p>
      <p>
        When used correctly with good images, FACES 2.0 has a 92% probability rate (face recognition of photographic likenesses using deep neural networking has a 98.5% probability rate).
      </p>
      <p>
        <strong>
          The use of FACES is free of charge.
        </strong>
      </p>
    </div>
    <div class="text-body alternative">
      <img class="offset" src="/static/homedemo.jpg" alt="">
      <p class="caption offset">Uncertain painted portrait compared to painted portraits of certain identity.</p>

      <div class="footer">
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Image Credits</a></li>
          <li><a href="#">&copy; 2018 University of California Regents</a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
html,
body {
  background: white !important;
}
#home {
  width: 100%;
}
.hero {
  min-height: 400px;
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
  font-weight: 800;
}
.hero-child {
  width: 100%;
}
.hero-child-container {
  background: rgba(0,0,0,.65);
  width: 100%;
  padding-top: 10px;
  padding-left: 10%;
  padding-bottom: 70px;
}
.text-body {
  background: white;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 10px;
  padding-bottom: 200px;
  text-align: center;
}
.text-body p {
  text-align: justify;
  color: #626262;
}
.text-body h2 {
  padding-top: 50px;
  text-transform: uppercase;
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
}
.footer ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.footer li {
  padding-left: 5px;
  padding-right: 5px;
}
.footer li a {
  color: black;
}
.footer li:not(:first-child):before {
    content: " | ";
}
</style>
