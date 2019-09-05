<template>
  <li class="venue" :class="{ active: visible }">
    <div class="venue-intro">
      <div class="venue-logo">
        <b-img-lazy :src="logo" blank-src="/img/beernotfound.jpg" />
      </div>
      <div class="venue-info">
        <nuxt-link :to="venue.slug" class="venue-link">
          <h2 class="venue-name">{{ venue.name }}</h2>
        </nuxt-link>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'VenueItem',
  props: {
    venue: {
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
    logo() {
      if (this.venue.logo_url) {
        return this.venue.logo_url
      }
      return '/img/beernotfound.jpg'
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    }
  }
}
</script>

<style>
.venue {
  position: relative;
  transition: all 0.1s ease-out;
}
.venue.active {
  background: #fffbee;
  box-shadow: 0 1px 3px 1px rgba(60, 64, 67, 0.2), 0 2px 8px 4px rgba(60, 64, 67, 0.1);
  z-index: 10;
  padding: 0.5rem 0 1rem;
}
.venue:hover,
.venue:focus-within {
  background: #fffbee;
  box-shadow: 0 1px 3px 1px rgba(60, 64, 67, 0.2), 0 2px 8px 4px rgba(60, 64, 67, 0.1);
}
.venue.active:hover,
.venue.active:focus-within {
  box-shadow: 0 1px 3px 1px rgba(60, 64, 67, 0.2), 0 2px 8px 4px rgba(60, 64, 67, 0.1);
}
.venue-intro {
  display: flex;
  padding: 1.25rem 0 0 1rem;
}
.venue-link,
.venue-link:hover {
  color: #31302c;
  text-decoration: none;
}
.venue-link::after {
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
.venue-info {
  flex: 1;
  min-width: 0;
  padding-bottom: 1rem;
  padding-right: 0.5rem;
  margin-top: -0.125rem;
  box-shadow: 0 1px 0 #ddd;
  transition: box-shadow 0s 0s ease-out;
}
.venue.active .venue-info,
.venue:hover .venue-info {
  box-shadow: none;
  transition: box-shadow 0s ease-out;
}
li.venue:last-of-type .venue-info {
  box-shadow: none;
}

.venue-logo {
  overflow: hidden;
  float: left;
  width: 4rem;
  min-width: 4rem;
  height: 4rem;
  margin-bottom: 1.25rem;
  margin-right: 1rem;
  transition: all 0.1s ease-out;
  border: 1px solid #ddd;
  background: #e5e5e5;
  display: flex;
}

.venue-logo img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.venue-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.25rem;
  margin-top: -0.075rem;
  padding-right: 32px;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.3;
  text-decoration: none;
}
</style>
