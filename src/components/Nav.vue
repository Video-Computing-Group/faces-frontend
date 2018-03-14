<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="/">Faces 2.0</a>
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
            <router-link class="nav-link" :to="{ name: 'App' }">App</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Curators and Academics' }">Curators and Academics</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a {
    color: #000;
}
.router-link-active {
    color: #a0ce4e;
    font-weight: 800;
}
.navbar {
    background: white;
}
</style>
