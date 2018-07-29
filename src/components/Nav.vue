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
            <div class="btn-group">
              <router-link type="button" class="btn" :to="{ name: 'App' }">
                Image Test
              </router-link>
              <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/app#overview">Overview</a>
                <a class="dropdown-item" href="/app#levels">Testing Levels</a>
                <a class="dropdown-item" href="/app#app">Application</a>
                <a class="dropdown-item" href="/app#results">Interpretting Results</a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="btn-group">
              <router-link type="button" class="btn" :to="{ name: 'About' }">
                History & Publications
              </router-link>
              <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/about#history">History</a>
                <a class="dropdown-item" href="/about#faces1">FACES 1.0</a>
                <a class="dropdown-item" href="/about#faces2">FACES 2.0</a>
                <a class="dropdown-item" href="/about#team">Team</a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="btn-group">
              <router-link type="button" class="btn" :to="{ name: 'Curators and Academics' }">
                Curators & Academics
              </router-link>
              <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/curatorsandacademics#what">What</a>
                <a class="dropdown-item" href="/curatorsandacademics#future">Future Direction</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli:400,700");

.navbar {
  padding-top: 50px;
  background: white;
  padding-bottom: 15px;
  font-family: "Muli", "Century Gothic", "Apple Gothic", AppleGothic,
    "URW Gothic L", "Avant Garde", Futura, sans-serif;
}
a {
  color: #000;
  font-size: 1.25em;
  font-weight: 700;
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
.dropdown-toggle {
  background: white;
}
</style>
