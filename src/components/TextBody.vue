<template>
    <div class="text-body">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
  color: #121212;
}
.text-body h2 {
  padding-top: 50px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

</style>
