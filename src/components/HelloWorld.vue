<template>
  <div id="main">
    <div class="row img-container">
      <div class="col-md-12 d-flex justify-content-center align-items-center">
        <h1>Faces</h1>
      </div>

      <div class="img-upload row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <img v-if="img1"
                :src="img1"
                class="userImage"
              />

              <div v-if="!img1" class="dropbox">
                <input type="file" :name="img1" @change="onFileChange1" accept="image/*" class="input-file">
                <p>
                  Drag your file(s) here to begin<br> or click to browse
                </p>
              </div>

              <button
                v-if="img1"
                @click="removeImage(1)"
                class="btn btn-primary btn-remove"
              >Remove Image 1</button>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <img v-if="img2"
                :src="img2"
                class="userImage"
              />

              <div v-if="!img2" class="dropbox">
                <input type="file" :name="img2" @change="onFileChange2" accept="image/*" class="input-file">
                <p>
                  Drag your file(s) here to begin<br> or click to browse
                </p>
              </div>

              <button
                v-if="img2"
                @click="removeImage(2)"
                class="btn btn-primary btn-remove"
              >Remove Image 2</button>
            </div>
          </div>
        </div>

        <div class="col-md-6 offset-md-3" v-if="comparing" >
          <div class="card data">
            <div class="my-auto card-body text-center">
              <h1>Data: {{ comparisonResult }}%</h1>
            </div>
          </div>
        </div>
      </div>


      <button
        type="button"
        class="btn btn-primary btn-lg btn-block"
        @click="compareImages"
        v-if="!comparing"
      >
        Compare Images
      </button>

      <button
        type="button"
        class="btn btn-warning btn-lg btn-block"
        @click="reset"
        v-else
      >
        Compare New Images
      </button>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2';
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      img1: '',
      img2: '',
      comparing: false,
      serverUrl: 'http://68e8e401.ngrok.io/api/compare',
      comparisonResult: '',
    };
  },
  methods: {
    onFileChange1(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0], 1);
    },
    onFileChange2(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0], 2);
    },
    createImage(file, num) {
      let image = new Image();
      let reader = new FileReader();

      reader.onload = e => {
        if (num === 1) {
          this.img1 = e.target.result;
        } else if (num === 2) {
          this.img2 = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(num) {
      if (num === 1) {
        this.img1 = '';
      } else if (num === 2) {
        this.img2 = '';
      }
    },
    compareImages() {
      if (!this.img1.length || !this.img2.length) {
        swal('Error', 'You must upload 2 images', 'error');
      } else {
        this.comparing = true;

        let dataArray = [];
        dataArray.push(this.img1);
        dataArray.push(this.img2);

        let that = this;
        axios
          .post(this.serverUrl, dataArray, {
            crossdomain: true,
          })
          .then(function(response) {
            console.log(response.data);
            that.comparisonResult = response.data;
          });
      }
    },
    reset() {
      this.comparing = false;
      this.img1 = '';
      this.img2 = '';
    },
  },
};
</script>

<style>
html,
body,
#main,
.swal2-shown {
  height: 100% !important;
  width: 100%;
  background: #f4f4f4;
}
.img-container {
  height: 100%;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
.img-upload {
  height: 80%;
  width: 100%;
}
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  background: lightcyan;
  color: dimgray;
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 90%;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
.userImage {
  width: 100%;
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
</style>
