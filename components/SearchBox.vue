<template>
  <div id="search" class="search-container" :class="{active: search_active}">
    <div class="search-icon-container">
      <div class="search-icon dark small">
        <div class="mug-top" />
        <div class="mug-sides" />
        <div class="mug-bottom" />
        <div class="mug-handle">
          <div class="mug-handle-inner" />
        </div>
      </div>
    </div>

    <input
      v-model="query"
      type="text"
      class="form-control search"
      placeholder="Search beers, breweries, or styles"
      aria-label="Search beers, breweries, or styles"
      @focus="search_active = true"
      @keyup.enter="onQueryEnter"
    >
    <button
      class="btn btn-clearsearch btn-secondary"
      type="button"
      @click="onSearchClose"
    >
      <img src="/svg/close.svg" alt="close">
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data () {
    return {
      query: undefined,
      search_active: false
    }
  },
  methods: {
    onQueryEnter () {
      this.$store.dispatch('beers/loadPage', {
        options: { on_tap: true, search: this.query }
      })
    },
    onSearchClose () {
      this.query = ''
      this.search_active = false
      this.$store.dispatch('beers/loadPage', {
        options: { on_tap: true, search: this.query }
      })
    }
  }
}
</script>

<style>
nav .search-container {
  flex:1 1 100%;
}

.search-container {
  position:relative;
  margin-bottom:.5rem;
  max-width:520px;
  margin-left:auto;
  margin-right:auto;
}

.search {
  width:100%;
  padding: .75rem 2.25rem .75rem 3rem;
  font-weight: 400;
  background:#ffd34f;
  color:#31302c;
  position:relative;
  border-radius:0.5rem;
  height:3rem;
}

.search:focus {
  color:#31302c;
}

.search::placeholder {
  color:#31302c;
}

.search-container .btn-search {
  background-color:#31302c;
  color:#fff;
  margin-bottom:0;
  padding:8px;
}

.search-container .btn-search img {
  width:1.5rem;
  height:1.5rem;
}

.search-container .btn-clearsearch {
  background: transparent;
  border: transparent;
  display:none;
  position:absolute;
  top:0;
  right:0;
  padding:.75rem .75rem;
  z-index:10;
  border-radius:.25rem;
  opacity:0.6;
}

.search-container .btn-clearsearch:hover {
  background:#31302c;
  opacity:1;
}

.search-container input.search.filled + .btn-clearsearch, .search-container.active .btn-clearsearch {
  display:block;
}

.search-container .btn-clearsearch img {
  width:.75rem;
  height:.75rem;
}

.search:focus, .search:active {
  outline:0;
  background: #ffdf7e;
}

.search, .search::placeholder {
  font-size:1rem;
  line-height:1.25;
}

/* Mug Search Icon */

.search-icon-container {
  position:absolute;
  z-index:10;
  perspective: 140;
  -webkit-perspective:100;
  perspective-origin: 30% 50%;
  padding:.75rem .75rem;
}

.search-icon {
  position: relative;
  width: 7em;
  height: 7em;
  font-size:12px;
  margin-top:.25em;
  margin-left:1em;
  transform: scale(1.0) scaleZ(1.0) rotateX(-0deg);
  transform-origin: 0% 0%;
  transition: transform .2s ease-out, margin .2s ease-out;
  opacity:0.7;
}

.search-icon.small {
  font-size:3px;
}

/* ALL THE BORDERS */
.mug-handle {
  border:.75px solid #fff;
}
.active .search-icon .mug-handle {
  border-width: 1.45px;
}
.mug-top, .mug-bottom, .mug-top:after {
  border: 1.45px solid #fff;
}
.mug-sides {
  border-left:1.45px solid #fff;
  border-right:1.45px solid #fff;
}
/* END ALL THE BORDERS */

.mug-handle {
  position: absolute;
  top: 2em;
  left: 5em;
  height: .1em;
  width: 1.85em;
  background: #31302c;
  border-left: 0;
  transform: rotate(45deg);
  transform-origin: -150% 100%;
  transition: height .2s ease-out, transform .2s ease-out .2s, top .2s ease-out, border-radius .2s ease-out .2s, background .2s ease-out .2s, border .2s ease-out;
}

.mug-handle:after {
  content:" ";
  position:absolute;
  border:0 solid #fff;
  height:0;
  width:1.25em;
  top:.5em;
  left:0;
  transition: height .2s ease-out, transform .2s ease-out .2s, top .2s ease-out, border-width .2s ease-out;
}

.mug-top, .mug-bottom, .mug-top:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  z-index: 1;
  transition: border .2s ease-out, height .2s ease-out, top .2s ease-out, border-radius .2s ease-out;
}

.mug-top:after {
  content:"";
  top:calc(6em - 2px);
  left:-2px;
  width:5em;
  border:0;
  transition: border .2s ease-out, height .2s ease-out, top .2s ease-out, border-radius .2s ease-out, top .2s ease-out .2s, background .2s ease-out;
}

.mug-sides {
  position:absolute;
  height:0;
  width:5em;
  top:2.5em;
  left:0;
  transition: all .2s ease-out;
}

.active .search-icon {
  margin-top:0;
  margin-bottom:.5em;
  transform: scale(1.0) scaleZ(1.0) rotateX(-10deg);
  transition: transform .2s ease-out .2s, margin .2s ease-out .2s;
}

.active .search-icon .mug-top, .active .mug-bottom {
  height:1em;
  transition: height .2s ease-out .2s;
}

.active .search-icon .mug-top {
  height:1.25em
}

.active .search-icon .mug-top:after {
  top:-.25em;
  height:1em;
  box-shadow:0 1px 0 #fff, 0 2px 0 #fff, 0 3px 0 #fff, 0 4px 0 #fff;
  background:#fff;
  transition: height .2s ease-out .2s, top .2s ease-out, background .2s ease-out .4s, box-shadow .2s ease-out .4s, top .2s ease-out .6s;
}

.active .search-icon .mug-bottom {
  top:calc(6em - 2px);
  height:1.5em;
  transition: height .2s ease-out .2s, top .2s ease-out .2s;
}

.active .search-icon .mug-handle {
  border-radius: 0 .5em .5em 0;
  height:4em;
  top:1.5em;
  background:transparent;
  transform: rotate(0deg);
  transition: height .2s ease-out .2s, border-width .2s ease-out .2s, transform .2s ease-out, top .2s ease-out .2s;
}

.active .search-icon .mug-handle:after {
  border-width:2px;
  border-left:0;
  height:2.75em;
  transition: height .2s ease-out .2s, border-width 0s ease-out .2s, transform .2s ease-out;
}

.active .search-icon .mug-sides {
  height:6em;
  top:.5em;
  transition: height .2s ease-out .2s, top .2s ease-out .2s;
}

.search-icon.dark .mug-top, .search-icon.dark .mug-bottom, .search-icon.dark .mug-sides, .search-icon.dark .mug-handle {
  border-color:#31302c;
}
.search-icon.dark .mug-top:after {
  content:none;
}

.small .mug-top:after {
  top:calc(6em - 6px)
}
.active .small .mug-handle:after {
  display:none;
}

.search-choice .group-name {
  margin-right: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: normal;
  color: #999999;
}

.search-choice .group-name:after {
  content: ":";
  padding-left: 2px;
  vertical-align: top;
}

@media (min-width: 375px) {
  .search, .search::placeholder {
    font-size:1.25rem;
  }
}

@media (min-width: 420px) {
  html {
    font-size:16px;
  }
  .container-fluid {
    padding-left:1rem;
    padding-right:1rem;
  }
  .search-container .btn-clearsearch {
    padding: .125rem;
    width:2rem;
    height:2rem;
    margin:.5rem;
  }

  .search-icon.small {
    font-size:4px;
  }
  .search-icon-container {
    padding:.75rem .5rem;
  }
}

@media (min-width: 576px) {
  .container-fluid {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .modal-dialog {
    max-width: 530px;
  }
  .venue-social a:hover span {
    max-width:100px;
    margin-left: .5rem;
  }
}

@media (min-width:880px) {

  .navbar-logo {
    padding-top:1.25rem;
  }

  .text-intro {
    padding-bottom:1.25rem;
  }

  .search-container {
    flex:0 0 50%;
    padding-right:.5rem;
  }

  .taphouse-select-container {
    flex:0 0 50%;
    padding-left:.5rem;
  }

  .taphouse-select-container:before {
    background-position: 90% 50%;
  }

  .beer-info {
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 5.5rem;
  }

  .beer-link {
    width: 50%;
    flex-basis: 100%;
  }

   .beer-brewer, .beer-style {
    width: 50%;
    flex-basis: auto;
  }

  .beer-brewer {
    padding-right: 2.5rem;
    margin-bottom: .25rem;
  }
}
</style>
