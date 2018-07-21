<template>
    <figure class="img-right">
        <img :src="image" alt="" :style="{ top: useOffset }">
        <figcaption class="caption" :style="{ top: useOffset }">
            <slot></slot>
        </figcaption>
    </figure>
</template>

<script>
export default {
  props: ["image", "offset"],
  computed: {
    useOffset() {
      return !this.offset ? "-150px" : "0px";
    }
  }
};
</script>

<style scoped>
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
.caption {
  padding-top: 10px;
  text-align: center !important;
  color: black !important;
  font-family: "Sorts Mill Goudy", serif !important;
  font-size: 0.8em;
}
</style>
