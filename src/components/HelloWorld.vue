<template>
  <div id="main">
    <div class="row img-container">
      <div class="col-md-12 text-center">
        <h1>Faces</h1>
      </div>

      <div class="img-upload col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Image 1</h5>
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
</style>
