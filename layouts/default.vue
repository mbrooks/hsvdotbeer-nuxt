<template>
  <div class="page-container">
    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">My App name</span>
      </md-toolbar>
      <md-list>
        <md-list-item>asdf</md-list-item>
        <md-list-item>asdf</md-list-item>
        <md-list-item>asdf</md-list-item>
      </md-list>
    </md-drawer>
    <div class="header">
      <div class="container-fluid container-header">
        <nav class="navbar navbar-expand-md navbar">
          <nuxt-link to="/" class="navbar-brand navbar-logo">
            <span class="particletext bubbles">
              <img
                class="brand-logo"
                src="/svg/hsv-beer-logo.svg"
                alt="hsv.beer"
              />
            </span>
          </nuxt-link>
          <md-button class="md-icon-button" @click="showNavigation = true">
            <md-icon>menu</md-icon>
          </md-button>
        </nav>
        <p class="text-intro lead text-center">
          Find draft beer in Huntsville
        </p>
      </div>
    </div>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    showNavigation: false
  })
}
</script>

<style>
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

html,
body {
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #31302c;
}
body {
  background-color: #f5bd00;
  background: linear-gradient(
    to right,
    #fcad0e 0%,
    #febf01 30%,
    #febf01 70%,
    #fcad0e 100%
  );
}

img {
  max-width: 100%;
}

.container-fluid {
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 980px;
}

.container-header {
  color: #31302c;
  padding-bottom: 0.25rem;
  display: flex;
  flex-wrap: wrap;
}

nav,
.text-intro {
  flex: 1 1 100%;
}

nav.navbar {
  box-shadow: none;
}

.navbar-logo {
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem;
  padding-bottom: 0;
}

.navbar-logo img {
  display: inline-block;
  width: 10rem;
  margin: 0 auto;
}

.text-intro {
  padding-bottom: 1rem;
}

body .particletext {
  position: relative;
  z-index: 5;
}

body .particletext.bubbles > .particle {
  opacity: 0;
  position: absolute;
  background-color: transparent;
  -webkit-animation: bubbles 3s ease-in infinite;
  animation: bubbles 3s ease-in infinite;
  border-radius: 100%;
  border: 0.75px solid rgba(255, 255, 255, 0.8);
  z-index: -1;
}

main {
  background: #fff;
  border-radius: 1.25rem;
  padding-bottom: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
}

@media (min-width: 420px) {
  html {
    font-size: 16px;
  }
  .container-fluid {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
@media (min-width: 576px) {
  .container-fluid {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 880px) {
  .navbar-logo {
    padding-top: 1.25rem;
  }
  .text-intro {
    padding-bottom: 1.25rem;
  }
}
</style>
