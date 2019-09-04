<template>
  <li class="beer" :class="{ active: visible }">
    <div class="beer-intro">
      <div class="beer-logo">
        <img :src="logo" />
      </div>
      <div class="beer-info">
        <a class="beer-link" @click="toggle">
          <h2 class="beer-name">{{ beer.name }}</h2>
        </a>
        <div class="beer-brewer">{{ beer.manufacturer.name }}</div>
        <div class="beer-style srm" :style="styleCss">
          {{ styleName }}
          <span v-if="abvFixed" class="beer-abv">{{ abvFixed }}%</span>
        </div>
        <div v-if="rating !== null && rating >= 0.1" class="beer-rating">{{ rating }}</div>
      </div>
    </div>
    <b-collapse id="beerDetails" v-model="visible" class="beer-details-container">
      <div class="beer-details">
        <div class="find-it">
          <h3 class="find-it-header">Find it on tap at:</h3>
          <ul class="find-it-list">
            <li v-for="place of beer.venues" :key="place.id">
              <a target="_blank" :href="place.website">{{ place.name }}</a>
            </li>
          </ul>
        </div>
        <div v-if="beer.untappd_url || beer.taphunter_url" class="learn-more">
          <h3 class="learn-more-header">Learn more</h3>
          <a v-if="beer.untappd_url" :href="beer.untappd_url" target="_blank" class="btn btn-outline-primary">
            Untappd
          </a>
          <a v-if="beer.taphunter_url" :href="beer.taphunter_url" target="_blank" class="btn btn-outline-primary">
            TapHunter
          </a>
        </div>
      </div>
    </b-collapse>
  </li>
</template>

<script>
export default {
  name: 'BeerItem',
  props: {
    beer: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    abvFixed() {
      if (this.beer.abv) {
        return Number(this.beer.abv).toFixed(1)
      } else {
        return undefined
      }
    },
    logo() {
      return this.beer.logo_url ? this.beer.logo_url : '/img/beernotfound.jpg'
    },
    styleCss() {
      if (this.beer.color_srm_html) {
        return { '--background-color': this.beer.color_srm_html }
      }
      return {}
    },
    styleName() {
      if (this.beer.style) {
        return this.beer.style.name
      }
      return 'Unknown'
    },
    rating() {
      if (this.beer.untappd_metadata) {
        if (this.beer.untappd_metadata.json_data) {
          const rating = this.beer.untappd_metadata.json_data.rating_score
          return Number(rating).toFixed(1)
        }
      }
      return undefined
    },
    ratingCount() {
      if (this.beer.untappd_metadata) {
        if (this.beer.untappd_metadata.json_data) {
          return this.beer.untappd_metadata.json_data.rating_count
        }
      }
      return undefined
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped>
.beer {
  position: relative;
  transition: all 0.1s ease-out;
}
.beer.active {
  background: #fffbee;
  box-shadow: 0 1px 3px 1px rgba(60, 64, 67, 0.2), 0 2px 8px 4px rgba(60, 64, 67, 0.1);
  z-index: 10;
  padding: 0.5rem 0 1rem;
}
.beer:hover,
.beer:focus-within {
  background: #fffbee;
  box-shadow: 0 1px 3px 1px rgba(60, 64, 67, 0.2), 0 2px 8px 4px rgba(60, 64, 67, 0.1);
}
.beer.active:hover,
.beer.active:focus-within {
  box-shadow: 0 1px 3px 1px rgba(60, 64, 67, 0.2), 0 2px 8px 4px rgba(60, 64, 67, 0.1);
}
.beer-intro {
  display: flex;
  padding: 1.25rem 0 0 1rem;
}
.beer-link,
.beer-link:hover {
  color: #31302c;
  text-decoration: none;
}
.beer-link::after {
  content: ' ';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
}
.beer-info {
  flex: 1;
  min-width: 0;
  padding-bottom: 1rem;
  padding-right: 0.5rem;
  margin-top: -0.125rem;
  box-shadow: 0 1px 0 #ddd;
  transition: box-shadow 0s 0s ease-out;
}
.beer.active .beer-info,
.beer:hover .beer-info {
  box-shadow: none;
  transition: box-shadow 0s ease-out;
}
li.beer:last-of-type .beer-info {
  box-shadow: none;
}
.beer-logo {
  overflow: hidden;
  float: left;
  width: 4rem;
  min-width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  transition: all 0.1s ease-out;
  border: 1px solid #ddd;
  background: #e5e5e5;
  display: flex;
}
/*
.beer.active .beer-logo {
  width:6.5rem;
  height:6.5rem;
  margin-top: -2.25rem;
  box-shadow: 0 0 4px rgba(0,0,0,0.3);
}
*/
.beer-logo img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.beer-name,
beer-brewer,
.beer-style {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.beer-name {
  margin-bottom: 0.25rem;
  margin-top: -0.075rem;
  padding-right: 32px;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.3;
}
.beer-brewer {
  font-size: 1.125rem;
  line-height: 125%;
  margin-bottom: -0.125rem;
}
.beer-style {
  font-size: 0.85rem;
  color: #606060;
}
.beer-style:before {
  content: ' ';
  background: #e5e5e5;
  display: inline-block;
  width: 0.625rem;
  height: 0.625rem;
  margin-right: 0.375rem;
  border-radius: 50%;
}
.beer-abv:before {
  content: ' - ';
}
.beer.active .beer-name,
.beer.active .beer-brewer,
.beer.active .beer-style {
  overflow: visible;
  white-space: normal;
}

.beer-rating {
  position: absolute;
  top: 0.875rem;
  right: 0.5rem;
  padding: 0.075rem;
  background: url(~assets/certificate.svg) no-repeat 50% 50%;
  background-size: 2rem;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 1.6rem;
  letter-spacing: -0.125rem;
  transition: background 0.1s ease-out;
  font-family: 'Lekton', courier, monospace;
  font-size: 1rem;
  padding-right: 0.25rem;
  padding-top: 0.325rem;
  color: #8f6400;
}

.beer-details-container {
  position: relative;
}

.beer-details {
  display: flex;
  padding: 1rem;
}

.beer-details a {
  position: relative;
  z-index: 10;
}
.find-it,
.learn-more {
  flex: 1 1 50%;
}
.find-it {
  padding-right: 0.5rem;
}
.find-it-list li a,
.find-it-list li {
  padding: 0.25rem 0;
}

.learn-more {
  padding-left: 0.5rem;
}

.find-it-header,
.learn-more-header {
  font-weight: 700;
  font-size: 1rem;
}
.find-it-list {
  list-style-type: none;
  padding-left: 0;
}
.collapsing {
  transition: height 0.1s ease-out;
}

.srm:before {
  background-color: var(--background-color);
}
</style>
