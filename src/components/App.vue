<template>
  <div>
    <hero />
    <text-body>
      <h2>Testing</h2>
      <p>
        FACES tests an image of unknown or uncertain identity against one or more images of known or provisional identity.  In this case, by "known identity," we mean an identity that is considered to be certain (for example, an image that can be proven to portray Mary Queen of Scots).  By "provisional identity" we mean a name that is provisionally attached to a particular portrait until that identity can be worked out with greater certainty (for example, an image that cannot be proven to portray the historical figure William Shakespeare but that is traditionally said to be of Shakespeare).  In this, FACES has the potential to match what is known with a given unknown--something that is unlikely to be accidental--and has the potential of providing previously unnoticeable or unconfirmable information by contributing categories of quantifiable data for researchers to factor into their own analyses.
      </p>
    </text-body>
    <text-body-image>
      <h2>
        FACES 2.0 has two test levels.
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
      <figure class="img-right">
        <img src="/static/14BattistaSforza.jpg" alt="">
        <figcaption>
          Identified sculptural portrait compared to a death mask of assumed but uncertain identity.
        </figcaption>
      </figure>
      <p>
        It is crucial to use good images.  The use of poor quality images may result in unreliable (and so misleading) results.  A good image is probably best described as a "good quality" portrait.  That is, it should be an original portrait (not a copy made by a later painter, sculptor, drawer, or engraver (these are sometimes perfectly reliable copies, but at other times they can be unreliable depending upon how accomplished the copyist or reproduction process was).  Other factors that can affect the quality of images and so the reliability of the results are portraits whose surfaces have been altered, for example through repainting, unprofessional cleaning, or neglect--all of which are common with older portraits.
      </p>
      <p>
        A good image is one that is reasonably detailed, that is, it gives enough facial "information" for FACES to read effectively.  Often, depictions of faces that do not occupy a large enough area of the picture space will not be large enough to convey enough information (for example, a small figure in a larger landscape, cityscape, or group of people).  If your image has more than one face, FACES doesn't know which one you want and so you must crop out any face other than the one you want tested.  High resolution (high ppi) images, which provide more information of a given face, will be more successful than low resolution images, which provide less information.  However, it is the resolution of the face, not the entire image, that matters.
      </p>
      <figure class="img-right">
        <img src="/static/144MargaretValois.jpg" alt="">
        <figcaption>
          Margaret of Valois, Queen Consort of France
        </figcaption>
      </figure>
      <p>
        Currently, FACES is designed to work on early modern Western portraits depicted from straight on or from a traditional three-quarter's view.  It has not yet been trained to process profiles or radically angled faces.
      </p>
      <p>
        Variations in age of more than ten years in images of adults (sometimes only a few years in younger subjects, depending on their age) may affect reliability.  Strong variations in lighting, facial hair, facial expression, and so on may reduce or affect the information to be read by FACES and so affect the reliability of the test results.  (In all this, FACES is no different from the use of face recognition technology with actual photographed faces.)
      </p>
      <p>
        Also, in some cases, the use of certain media--for example, marble as opposed to terracotta, oil in contrast to chalk--which human perception reads as more or less identical, are read more precisely by FACES, because of the sometimes greater exactitude of particular media in detailing facial information.
      </p>
    </text-body-image>
    <div 
      id="main" 
      class="text-center">
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
            <div class="card data">
              <div
                v-for="(p, index) in predictions"
                :key="index"
                class="my-auto card-body text-center"
              >
                <h1>{{ p.result.toFixed(2) }}%</h1>
                <p>{{ p.decision }}</p>
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
  </div>
</template>

<script>
import axios from "axios";
import PictureInput from "vue-picture-input";
import Hero from './Hero';
import TextBody from './TextBody';
import TextBodyImage from './TextBodyImage';

export default {
  name: "App",
  components: {
    PictureInput,
    Hero,
    TextBody,
    TextBodyImage
  },
  data() {
    return {
      testImage: "",
      referenceImages: [],
      comparing: false,
      serverUrl: "http://zeus.johnpham.net:5000/api/compare",
      confidence: "",
      decision: "",
      predictions: ""
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
      if (!this.testImage || !this.referenceImages) {
        swal("Error", "You must upload 2 images", "error");
      } else {
        this.comparing = true;

        let formData = new FormData();
        formData.append("image[0]", this.testImage);
        formData.append("image[1]", this.referenceImages);

        axios
          .post(this.serverUrl, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(res => {
            console.log(res.data);
            this.predictions = res.data;
          });
      }
    },
    reset() {
      this.comparing = false;
      this.$refs.testImage.removeImage();
      this.$refs.referenceImage.removeImage();
    }
  }
};
</script>

<style>
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
  position: absolute;
  bottom: 0;
  padding: 30px;
  left: 5%;
  width: 90%;
  background: none;
  border: 3px white solid;
  border-radius: 0;
  margin-bottom: 20px;
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
.img-right {
  float: right;
  margin: 0px 0px 20px 30px;
}
.img-right img {
  width: 300px;
  top: -150px;
  position: relative;
}
.img-right figcaption {
  width: 300px;
  top: -150px;
  position: relative;
}
</style>
