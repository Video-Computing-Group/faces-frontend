<template>
    <div
      class="text-body alternative"
      :style="getBackgroundColor"
    >
      <img class="offset" :src="image" alt="">
      <p class="caption offset">
        <slot name="caption"></slot>
      </p>
      <slot></slot>
    </div>
</template>

<script>
export default {
  props: ["color", "image"],
  computed: {
    getBackgroundColor() {
      let baseStyle = {
        backgroundColor: "white"
      };
      if (this.color === "primary") {
        baseStyle.backgroundColor = "white";
      } else if (this.color === "secondary") {
        baseStyle.backgroundColor = "#d6d4ca";
      }
      return baseStyle;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Sorts+Mill+Goudy");
.text-body {
  background: white;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 10px;
  padding-bottom: 200px;
  text-align: center;
}
.text-body p {
  width: 100%;
  top: -150px;
  position: relative;
  text-align: justify;
  color: #121212;
}
.text-body h2 {
  padding-top: 50px;
  margin-bottom: 20px;
  text-transform: uppercase;
  width: 100%;
  top: -150px;
  position: relative;
}
.alternative {
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
  font-family: "Sorts Mill Goudy", serif !important;
  font-size: 9pt;
}
</style>
