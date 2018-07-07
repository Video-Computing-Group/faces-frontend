<template>
    <figure class="img-right">
        <img :src="image" alt="">
        <figcaption class="caption">
            <slot></slot>
        </figcaption>
    </figure>
</template>

<script>
export default {
    props: ['image']
}
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
  font-family: 'Sorts Mill Goudy', serif !important;
  font-size: 0.8em;
}
</style>
