<template>
  <div id="home">
    <div class="hero">
      <div class="hero-child-container">
        <h1 class="hero-child">FACES 2.0</h1>
        <h3 class="hero-child">Faces, Art, and Computerized Evaluation Systems</h3>
        <p class="hero-child">Face recognition evaluation for works of portrait art</p>
      </div>
    </div>
    <div class="text-body">
      <h2>What FACES 2.0 is and what it is for</h2>
      <p>
        FACES 2.0 is a face recognition application based on a method of machine learningknown as deep neural networks. Funded by the Kress Foundation, it is designed to automatically test the degree of probability of a shared identification between different works of portrait art--that is, non-photographic portraits that are subject to the subjectivity of artistic interpretation. When used correctly with good images, it positively matches what is known with a given unknown-- something that is unlikely to be accidental-- and yields results that may be considered probable. In this, FACES has the potential to provide previously unnoticeable or unconfirmable information by contributing categories of quantifiable data for researchers to factor into theirown analyses.
      </p>
      <p>
        The use of FACES through the Frick website is limited to academics and curators (this is free of charge). Other researchers may acquire the FACES app.
      </p>

      <h2>READ THIS</h2>
      <p>
        This technology does not prove the identity of its subjects, either absolutely (for example,that the image is unquestionably Mary Queen of Scots) or  relatively (for example, that the image unquestionably matches an uncertain type, such as "Shakespeare Type 1" or "Shakespeare Type2").
      </p>
      <p>
        FACES is a pioneering program and so users must not expect completion or perfection any more than with any other new digitally-based technology, all of which typically go through long periods of development.  The application of face recognition technology to works of art will certainly be refined in probably every area, but only in the course of its adoption by the museum and academic communities.
      </p>
      <p>
        Since there was no pre-existing database of processed images of works of portrait art for us to develop our program, we had to make our own, something we did with as much control over variables as possible.  Practically speaking, this meant a database composed of portraits from a historical period marked by its attention to naturalistic representation in general and, in particular, by artists known for such attention.  We found that portraits from Western Europe, fifteenth to early eighteenth century, suited our purposes best.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
html,
body {
    background: white !important;
}
#home {
    height: 100%;
    width: 100%;
}
.hero {
    height: 100%;
    width: 100%;
    background: #0009;
    text-align: center;
    color: white;
}
.hero-child {
    width: 100%;
}
.hero-child-container {
    padding-top: 20%;
}
.text-body {
    background: white;
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 10px;
    padding-bottom: 50px;
    text-align: center;
}
.text-body p {
    text-align: justify;
    color: #626262;
}
.text-body h2 {
    padding-top: 50px;
}
</style>
