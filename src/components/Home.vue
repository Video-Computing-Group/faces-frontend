<template>
  <div id="home">
    <hero />

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
    
    <text-body-image
      color="secondary"
      image="/static/homedemo.jpg"
    >
      <template slot="caption">
        Mary Queen of Scots: Three portraits of certain identity tested against one of uncertain identity.
      </template>
    </text-body-image>

    <div class="text-body alternative">
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
import Hero from './Hero'
import TextBodyImage from './util/TextBodyImage'

export default {
  components: {
    Hero,
    TextBodyImage
  }
};
</script>

<style scoped>
html,
body {
  background: white !important;
}
#home {
  width: 100%;
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
