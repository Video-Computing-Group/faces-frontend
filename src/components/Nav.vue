<template>
  <nav class="navbar navbar-expand-lg">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">Faces 2.0</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'About' }">About FACES</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'People' }">Curators and Academics</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
a {
  color: #ffffff80;
}
.router-link-active {
  color: white;
}
</style>
