<template>
  <div>
    <hero />
    <text-body>
      <h2 id="overview">Testing</h2>
      <p>
        FACES tests an image of unknown or uncertain identity against one or more images of known or provisional identity.  
      </p>
      <p>
        In this case, by "known identity," we mean an identity that is considered to be certain (for example, an image that can be proven to portray Mary Queen of Scots).
      </p>
      <p>
        By "provisional identity" we mean a name that is provisionally attached to a particular portrait until that identity can be worked out with greater certainty (for example, an image that cannot be proven to portray the historical figure William Shakespeare but that is traditionally said to be of Shakespeare).
      </p>
      <p>
        In this, FACES has the potential to match what is known with a given unknown--something that is unlikely to be accidental--and has the potential of providing previously unnoticeable or unconfirmable information by contributing categories of quantifiable data for researchers to factor into their own analyses.
      </p>
    </text-body>

    <text-body-image-r image="/static/bernini.jpg" color="secondary">
      <template slot="caption">
        Gian Lorenzo Bernini, by himself, at various stages of his life. 
      </template>
      <h2 id="levels">
        FACES 2.0 has two test levels
      </h2>
      <p>
        <strong>A simple test</strong> involves testing a single unknown image against a single known image.  If all of the images used are of good quality, this test will provide a fair amount of probability.
      </p>
      <p>
        <strong>An advanced test</strong> involves testing a single unknown image against more than one known image.  The more known images that are used, the more reliable the test results will be.
      </p>
      <p>
        While FACES can test a single unknown portrait against a single known one, the outcome of the testing is more reliable when more than one known portrait is used--three or four knowns might be a good minimum but the user should test as many good knowns as possible.  (An analogy might be public opinion testing: statistically, a poll of one hundred people would be considered less reliable than a poll of four hundred.)  FACES is a form of data analysis and the results are only as good as the data the user inputs into the FACES application.
      </p>
      <image-inset image="/static/14BattistaSforza.jpg">
        Identified sculptural portrait compared to a death mask of assumed but uncertain identity.
      </image-inset>
      <p>
        It is crucial to use good images.  The use of poor quality images may result in unreliable (and so misleading) results.  A good image is probably best described as a "good quality" portrait.  That is, it should be an original portrait (not a copy made by a later painter, sculptor, drawer, or engraver (these are sometimes perfectly reliable copies, but at other times they can be unreliable depending upon how accomplished the copyist or reproduction process was).  Other factors that can affect the quality of images and so the reliability of the results are portraits whose surfaces have been altered, for example through repainting, unprofessional cleaning, or neglect--all of which are common with older portraits.
      </p>
      <p>
        A good image is one that is reasonably detailed, that is, it gives enough facial "information" for FACES to read effectively.  Often, depictions of faces that do not occupy a large enough area of the picture space will not be large enough to convey enough information (for example, a small figure in a larger landscape, cityscape, or group of people).  If your image has more than one face, FACES doesn't know which one you want and so you must crop out any face other than the one you want tested.  High resolution (high ppi) images, which provide more information of a given face, will be more successful than low resolution images, which provide less information.  However, it is the resolution of the face, not the entire image, that matters.
      </p>
      <image-inset image="/static/144MargaretValois.jpg">
          Margaret of Valois, Queen Consort of France
      </image-inset>
      <p>
        Currently, FACES is designed to work on early modern Western portraits depicted from straight on or from a traditional three-quarter's view.  It has not yet been trained to process profiles or radically angled faces.
      </p>
      <p>
        Variations in age of more than ten years in images of adults (sometimes only a few years in younger subjects, depending on their age) may affect reliability.  Strong variations in lighting, facial hair, facial expression, and so on may reduce or affect the information to be read by FACES and so affect the reliability of the test results.  (In all this, FACES is no different from the use of face recognition technology with actual photographed faces.)
      </p>
      <p>
        Also, in some cases, the use of certain media--for example, marble as opposed to terracotta, oil in contrast to chalk--which human perception reads as more or less identical, are read more precisely by FACES, because of the sometimes greater exactitude of particular media in detailing facial information.
      </p>
    </text-body-image-r>
    
    <text-body-image-alt id="app">
      <div class="buttons" v-if="appState === 'init'">
        <!-- <button>Sign In</button> -->
        <button @click="appState = 'simple'">Simple Test</button>
        <!-- <button>Advanced Test</button> -->
      </div>
      <div 
        id="main" 
        class="text-center"
        v-if="appState === 'simple'"
      >
        <div class="row img-container">
          <div class="img-upload row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">

                  <picture-input 
                    ref="testImage" 
                    :custom-strings="{tap: 'Click here to upload a test image'}"
                    :removable="true"
                    width="300" 
                    height="300" 
                    margin="16" 
                    accept="image/jpeg,image/png" 
                    size="10"
                    button-class="btn"
                    @change="onChange"/>

                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  
                  <picture-input 
                    ref="referenceImage" 
                    :custom-strings="{tap: 'Click here to upload a reference image'}"
                    :removable="true"
                    width="300" 
                    height="300" 
                    margin="16" 
                    accept="image/jpeg,image/png" 
                    size="10"
                    button-class="btn"
                    @change="onChangeReference"/>
                  
                </div>
              </div>
            </div>

            <div 
              v-if="comparing" 
              class="col-md-6 offset-md-3" >
              <div class="card data results">
                <h1 class="match-rate" v-if="isLoading">Loading</h1>
                <div
                  v-for="(p, index) in predictions"
                  :key="index"
                  class="my-auto text-center"
                >
                  <h1 class="match-rate">{{ p.result.toFixed(2) }}%</h1>
                  <p class="decision">{{ p.decision }}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            v-if="!comparing"
            type="button"
            class="btn btn-primary btn-lg btn-block btn-action"
            @click="compareImages"
          >
            Compare Images
          </button>

          <button
            v-else
            type="button"
            class="btn btn-warning btn-lg btn-block btn-action"
            @click="reset"
          >
            Compare New Images
          </button>
        </div>
      </div>
    </text-body-image-alt>
    <text-body-image-r image="/static/163CharlesIIEngland.jpg">
      <template slot="caption">
        Portraits of the same sitter, Charless II of England, by different artists.
      </template>
      <h2 id="results">Interpretting Results</h2>
      <p>
        Once your images have been tested, you will receive a number on a scale from 0 to 100, analogous to a percentage: this is the similarity score.  Generally speaking, any score over 56 may be considered to have the probability--not the certainty--of a match.  Any score under 47 may be considered to have the probability--again, not the certainty--of a non-match.  And any score from 47 to 56 is statistically equivocal--it could indicate either a match or a non-match.
      </p>
      <p>
        Some probable matches and non-matches, however, are stronger than others.  For example, while similarity scores of 57 and 77 both suggest the probability of a match, the score of 77 represents a stronger probability (it would be a "strong score") than 57.  Non-match scores operate in the same way.
      </p>
      <p>
        Because the distribution of scores is based upon a specific body of images (our particular database), it might vary slightly if the body of images varies.
      </p>
      <p>
        This technology does not prove the identity of its subjects, either absolutely (for example, that the image is unquestionably Mary Queen of Scots) or relatively (for example, that the image unquestionably matches an uncertain type, such as "Shakespeare Type 1" or "Shakespeare Type 2").
      </p>
      <p>
        The testing and the interpretation of the testing of historically significant individuals are not always straightforward and are best done by professional curators and academics who are fully aware the quality of these portraits, the changes they may have undergone through time, and the portrait practices of the time (including the reuse of portraits).  Also in such cases, copies are to be avoided except by those who fully understand their quality and their place in the history of the portraiture of the individual in question.
      </p>
      <p>
        FACES is a pioneering program and so users must not expect completion or perfection any more than with any other new digitally-based technology, all of which typically go through long periods of development.  The application of face recognition technology to works of art will certainly be refined in probably every area of analysis, but only in the course of its adoption by the museum and academic communities.
      </p>
      <p>
        Since there was no pre-existing database of processed images of works of portrait art for us to develop our program, we had to make our own, something we did with as much control over variables as possible.  Practically speaking, this meant a database composed of portraits from a historical period marked by its attention to naturalistic representation in general and, in particular, by artists known for such attention.  We found that portraits from Western Europe, fifteenth to early eighteenth century, suited our purposes best, and FACES was configured for this type of portrait.  While a larger database would provide greater accuracy, statistical tests show that FACES 2.0 has a 92% accuracy rate.  At the current time, FACES is not designed for profiles, strongly angled portraits, or portraits from other periods or cultures.
      </p>
    </text-body-image-r>
  </div>
</template>

<script>
import axios from "axios";
import PictureInput from "vue-picture-input";
import Hero from "./Hero";
import TextBody from "./TextBody";
import TextBodyImage from "./TextBodyImage";
import TextBodyImageAlt from "./TextBodyImageAlt";
import TextBodyImageR from "./util/TextBodyImageOffset";
import ImageInset from "./util/ImageInset";

export default {
  name: "App",
  components: {
    PictureInput,
    Hero,
    TextBody,
    TextBodyImage,
    TextBodyImageAlt,
    TextBodyImageR,
    ImageInset
  },
  data() {
    return {
      testImage: "",
      referenceImages: [],
      comparing: false,
      serverUrl: "http://169.235.21.62:5000/api/compare",
      confidence: "",
      decision: "",
      predictions: "",
      appState: "init",
      result: '',
      isLoading: false
    };
  },
  mounted: function() {
    this.$swal.setDefaults({
      confirmButtonText: "Next &rarr;",
      showCancelButton: false,
      progressSteps: ["1", "2", "3"],
      width: "80%"
    });

    let steps = [
      {
        title: "About the App",
        html: `
                    <p>A simple test involves testing a single unknown image against a single known image.  If all of the images used are of good quality, this test will provide a fair amount of probability.</p>
                    <p>An advanced test involves testing a single unknown image against more than one known image.  The more known images that are used, the more reliable the test results will be.</p>
                `
      },
      {
        title: "Requirements",
        html: `
                    <p>FACES tests an image of unknown or uncertain identity against one or more images of known identity.  By "known identity," we mean either an identity that is considered to be certain (for example, an image that can be proven to portray Mary Queen of Scots) or a name that is attached to a body of facial characteristics (for example, an image that belongs to a body of portraits that cannot be proven to portray the historical figure William Shakespeare but that might be grouped as types: "Shakespeare Type 1," "Shakespeare Type 2," and so on).</p>
                    <p>While FACES can test a single unknown portrait against a single known one, the outcome of the testing is more reliable when more than one known portrait is used--three or four knowns might be a good minimum but the user should test as many good knowns as possible.  (An analogy might be public opinion testing: statistically, a poll of forty people would be considered less reliable than a poll of two hundred.)  FACES is a form of data analysis and the results are only as good as the data the user inputs into the FACES application.</p>
                    <p>It is crucial to use good images.  The use of poor quality images may result in unreliable (and so misleading) results.  A good image is probably best described as a "good quality" portrait.  That is, it should be an original portrait (not a copy made by a later painter, sculptor, drawer, or engraver--these are sometimes perfectly reliable copies but at other times they can be unreliable, depending upon how accomplished the copyist or reproduction process was).  Other factors that can affect the quality of images and so the reliability of the results are portraits whose surfaces have been altered, for example through repainting, unprofessional cleaning, or exposure to the elements--all of which are common with older portraits.
                    </p>
                `
      },
      {
        title: "Requirements 2",
        html: `
                    <p>A good image is one that is reasonably detailed, that is, it gives enough facial "information" for FACES to read effectively.  Often, depictions of faces that do not occupy a large enough area of the picture space will not be large enough to convey enough information (for example, a small figure in a larger landscape, cityscape, or group of people).  If your image has more than one face, FACES doesn't know which one you want and so you must crop out any face other than the one you want tested.  High resolution (high dpi) images, which provide more information of a given face, will be more successful than low resolution images, which provide less information.  However, it is the resolution of the face, not the entire image, that matters.</p>
                    <p>Currently, FACES is designed to work on portraits depicted from straight on or from a traditional three-quarter's view--not profiles or radically angled faces--and early modern Western portraits.</p>
                    <p>Variations in age of more than ten years in images of adults (sometimes only a few years in younger subjects, depending on their age) may affect reliability.  Strong variations in lighting, facial hair, facial expression, and so on may reduce or affect the information to be read by FACES and so affect the reliability of the test results.  (In all this, FACES is no different from the use of face recognition technology with actual photographed faces.)</p>
                    <p>Also, in some cases, the use of certain media--for example, marble as opposed to terracotta, oil in contrast to chalk--which human perception reads as more or less identical, are read more precisely by FACES, because of the sometimes greater exactitude of particular media in detailing facial information.</p>
                `
      }
    ];

    // this.$swal.queue(steps);
  },
  methods: {
    onChange(image) {
      if (image) {
        this.testImage = this.$refs.testImage.file;
      }
    },
    onChangeReference(image) {
      if (image) {
        this.referenceImages = this.$refs.referenceImage.file;
      }
    },
    removeReferenceImage(index) {
      this.referenceImages = this.referenceImages.filter(
        element => element != this.referenceImages[index]
      );
    },
    compareImages() {
      this.decision = '';
      if (!this.testImage || !this.referenceImages) {
        swal("Error", "You must upload 2 images", "error");
      } else {
        this.comparing = true;

        let formData = new FormData();
        formData.append("image[0]", this.testImage);
        formData.append("image[1]", this.referenceImages);

        this.isLoading = true
        console.log(this.isLoading)
        axios
          .post(this.serverUrl, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(res => {
            console.log(res.data);
            this.predictions = res.data;
            this.isLoading = false
          })
          .catch(err => {
            console.log(err)
          });
      }
    },
    reset() {
      this.comparing = false;
      this.$refs.testImage.removeImage();
      this.$refs.referenceImage.removeImage();
      this.predictions = [];
      this.decision = '';
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
body {
  font-family: "Montserrat", sans-serif;
}
#main {
  height: 100% !important;
  width: 100%;
}
.swal2-shown {
  height: 100% !important;
  width: 100%;
  background: #f4f4f4;
}
.img-container {
  height: 90%;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
.img-upload {
  height: 80%;
  width: 100%;
  display: flex;
  align-content: center;
}
.dropbox {
  background: #ffffff1a;
  color: white;
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 90%;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: #ffffff4d;
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
  margin-top: 0;
  margin-bottom: 0;
}
.userImage {
  width: auto;
  max-height: 400px;
}
.btn-remove {
  bottom: 20px;
  position: absolute;
}
.row {
  margin-left: auto;
  margin-right: auto;
}
.data-text {
  top: 40%;
  position: relative;
}
.card {
  background-color: #0003;
  border-radius: 0;
  
}
h1 {
  color: white;
}
p {
  color: white;
}
.btn-action {
  /* position: absolute; */
  bottom: 0;
  padding: 30px;
  left: 5%;
  width: 90%;
  background: none;
  border: 3px white solid;
  border-radius: 0;
  margin-top: 50px;
  /* margin-bottom: 20px; */
  margin-left: auto;
  margin-right: auto;
  color: white;
}
.btn-action:hover {
  background: white;
  color: black;
  border: white 3px solid;
}
.card-body {
  display: flex;
  justify-content: center;
}
.picture-inner-text {
  color: white;
}
#app {
  padding-bottom: 300px;
}

button {
  border: none;
  padding: 20px 60px;
  width: 50vw;
  background: none;
  border: 1px white solid;
  margin-bottom: 10px;
  color: white;
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 400;
  font-family: "GlacialIndifferenceBold", serif;
  z-index: 10;
}

.results {
  margin-top: 50px;
}
.match-rate {
  padding-top: 15px;
}
.decision {
  position: initial !important;
  text-align: center !important;
  color: white !important;
}
</style>
