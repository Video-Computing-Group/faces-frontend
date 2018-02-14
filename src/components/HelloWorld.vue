<template>
  <div id="main">
    <div class="row img-container">
      <div class="col-md-12 text-center">
        <h1>Faces</h1>
      </div>

      <div class="img-upload col-md-6">
        <div class="card">
          <div class="card-body">
            <img v-if="img1"
              :src="img1"
              class="userImage"
            />

            <div v-if="!img1" class="dropbox">
              <input type="file" :name="img1" @change="onFileChange" accept="image/*" class="input-file">
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

      <div class="img-upload col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Image 2</h5>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-primary btn-lg btn-block">Compare Images</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      img1: '',
      img2: ''
    }
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let image = new Image();
      let reader = new FileReader();

      reader.onload = (e) => {
        this.img1 = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (num) {
      if (num === 1) {
        this.img1 = '';
      }
      else if (num === 2) {
        this.img2 = '';
      }
    }
  }
}
</script>

<style>
html, body, #main {
  height: 100%;
  width: 100%;
  background: #f4f4f4;
}
.card {
  height: 100%;
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
  height: 90%;
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
</style>
