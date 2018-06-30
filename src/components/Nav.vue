<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a 
        class="navbar-brand" 
        href="/">Faces 2.0</a>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"/>
      </button>

      <div 
        id="navbarSupportedContent" 
        class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link 
              :to="{ name: 'Home' }" 
              class="nav-link" 
              exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link 
              :to="{ name: 'App' }" 
              class="nav-link">Image Test</router-link>
          </li>
          <li class="nav-item">
            <router-link 
              :to="{ name: 'About' }" 
              class="nav-link">History & Publications</router-link>
          </li>
          <li class="nav-item">
            <router-link 
              :to="{ name: 'Curators and Academics' }" 
              class="nav-link">Curators & Academics</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding-top: 50px;
  background: white;
  padding-bottom: 15px;
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
}
a {
  color: #000;
  font-size: 1.25em;
  font-weight: 500;
  text-transform: uppercase;
}
.router-link-active {
  color: #929292;
  font-weight: 700;
}
.nav-item {
  margin-left: 50px;
}
.container {
  max-width: 95%;
}
</style>
