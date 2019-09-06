<template>
  <div class="page-container">
    <md-drawer :md-active.sync="showNavigation">
      <ul class="nav flex-column">
        <li class="nav-item">
          <b-link class="nav-link" to="/" @click="showNavigation = false">Beers</b-link>
        </li>
        <li class="nav-item">
          <b-link class="nav-link" to="/venues" @click="showNavigation = false">Venues</b-link>
        </li>
        <li class="nav-item">
          <b-link class="nav-link" to="/about" @click="showNavigation = false">About</b-link>
        </li>
      </ul>
    </md-drawer>
    <div class="header">
      <div class="container-fluid container-header">
        <nav class="navbar navbar-expand-md navbar">
          <b-link to="/" class="navbar-brand navbar-logo">
            <hsv-beer-logo></hsv-beer-logo>
          </b-link>
          <b-link aria-label="Navigation Menu" class="menu-link md-icon-button" @click="showNavigation = true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-menu"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </b-link>
        </nav>
        <p class="text-intro lead text-center">Find draft beer in Huntsville</p>
      </div>
    </div>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import HsvBeerLogo from '~/components/HsvBeerLogo.vue'
import MdDrawer from '~/components/md/MdDrawer.vue'

export default {
  components: {
    HsvBeerLogo,
    MdDrawer
  },
  data: () => ({
    showNavigation: false
  })
}
</script>

<style>
html,
body {
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.0125rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #31302c;
  background-color: #f5bd00;
  background: linear-gradient(to right, #fcad0e 0%, #febf01 30%, #febf01 70%, #fcad0e 100%);
}

img {
  max-width: 100%;
}

a {
  color: #906500;
}

a:hover {
  color: #31302c;
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
  position: unset;
  box-shadow: none;
}

.menu-link {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem;
  color: #31302c;
  border-radius: 50%;
}

.menu-link:hover {
  background: rgba(0, 0, 0, 0.15);
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

h1,
h2,
h3,
h4,
h5,
p {
  color: #31302c;
}
h1,
h2,
h3,
h4,
h5,
.h1,
.h2,
.h3,
.h4,
.h5 {
  padding-top: 0.75em;
  padding-bottom: 0.125em;
}
h2:first-child,
h3:first-child,
h4:first-child,
h5:first-child {
  padding-top: 0;
}
h2 a {
  font-weight: bold;
}
a {
  color: #906500;
  transition: all 0.2s ease-out;
}
a:hover {
  color: #31302c;
}
hr {
  border-top: 1px solid #ddd;
}
.z-1,
.btn.btn-raised {
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -webkit-transition: -webkit-box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: -webkit-box-shadow 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: box-shadow 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: box-shadow 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-box-shadow 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.z-1.z-hover:hover,
.z-1.z-hover:active,
.z-1.z-hover:focus,
.btn.btn-raised:hover,
.btn.btn-raised:active,
.btn.btn-raised:focus {
  -webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25), 0 4px 8px rgba(0, 0, 0, 0.22);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25), 0 4px 8px rgba(0, 0, 0, 0.22);
}
.z-2 {
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.z-3 {
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.z-4 {
  -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.z-5 {
  -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.btn.btn-raised.btn-primary {
  background-color: #f5bd00;
  color: #31302c;
}

.btn.btn-raised.btn-primary:hover,
.btn.btn-raised.btn-primary:focus {
  background-color: #ffd34f;
  color: #31302c;
}

.btn.btn-outline-primary {
  color: #906500;
  border-color: #906500;
}

.btn.btn-outline-primary:hover,
.btn.btn-outline-primary:focus {
  color: #31302c;
  border-color: #31302c;
  background-color: #f5bd00;
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
