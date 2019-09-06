<template>
  <b-modal id="venue-modal" v-model="showModal" centered hide-footer>
    <template v-if="venue" slot="default">
      <section class="venue">
        <div class="venue-logo-title">
          <img class="venue-logo" :src="venue.logo_url" alt>
          <h1 class="venue-title">
            {{ venue.name }}
          </h1>
        </div>
        <div class="venue-info">
          <div class="row">
            <div class="col col-sm-6">
              <address class="venue-address">
                {{ venue.address }}
                <br>
                {{ venue.city }} {{ venue.state }} {{ venue.postal_code }}
                <br>
                <b-link class="venue-gmap" :href="mapsUrl" target="_blank">
                  View on Map
                </b-link>
              </address>
            </div>
            <div class="col col-sm-6">
              <div class="venue-contact">
                <b-link v-if="venue.website" class="venue-website" :href="venue.website" target="_blank" rel="noreferrer">
                  {{ venue.website }}
                </b-link>
                <b-link v-if="venue.email" class="venue-email" :href="`mailto:${venue.email}`">
                  {{ venue.email }}
                </b-link>
                <b-link v-if="venue.phone_number" class="venue-phone" :href="`tel:${venue.phone_number}`">
                  {{ venue.phone_number }}
                </b-link>
              </div>
            </div>
          </div>
          <div class="venue-social">
            <b-link v-if="untappd" class="btn venue-untappd" :href="untappd" target="_blank" rel="noreferrer">
              <b-img src="~/assets/social/untappd.svg" />
              <span>Untappd</span>
            </b-link>
            <b-link v-if="facebook" class="btn venue-facebook" :href="facebook" target="_blank" rel="noreferrer">
              <b-img src="~/assets/social/facebook.svg" />
              <span>Facebook</span>
            </b-link>
            <b-link v-if="instagram" class="btn venue-instagram" :href="instagram" target="_blank" rel="noreferrer">
              <b-img src="~/assets/social/instagram.svg" />
              <span>Instagram</span>
            </b-link>
            <b-link v-if="twitter" class="btn venue-twitter" :href="twitter" target="_blank" rel="noreferrer">
              <b-img src="~/assets/social/twitter.svg" />
              <span>Twitter</span>
            </b-link>
          </div>
        </div>
      </section>
    </template>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VenueModal',
  computed: {
    ...mapState({
      show: state => state.show_modal,
      venue: state => state.modal_venue
    }),
    showModal: {
      get () {
        return this.show
      },
      set (val) {
        this.$store.commit('HIDE_MODAL')
      }
    },
    mapsUrl () {
      return `https://maps.google.com/?q=${this.venue.address}, ${this.venue.city}, ${this.venue.state}, ${this.venue.postal_code}`
    },
    facebook () {
      return this.venue.facebook_page
    },
    instagram () {
      let ret = null
      if (this.venue.instagram_handle) {
        ret = `https://instagram.com/${this.venue.instagram_handle}`
      }
      return ret
    },
    twitter () {
      let ret = null
      if (this.venue.twitter_handle) {
        ret = `https://twitter.com/${this.venue.twitter_handle}`
      }
      return ret
    },
    untappd () {
      return this.venue.untappd_url
    }
  }
}
</script>

<style>
.modal-header {
  border-bottom: none;
}

.modal-header .close {
  position: absolute;
  right: 1rem;
  z-index: 1041;
}

.modal-body {
  margin-top: -1rem;
}

.venue-logo {
  width: 64px;
  height: auto;
  margin: 0 auto;
  display: block;
}

.venue-title {
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 0.25rem;
}

.venue-info {
  display: flex;
  flex-wrap: wrap;
}

.venue-address,
.venue-contact,
.venue-social {
  flex: 1 1 33.333%;
  min-width: 240px;
}

.venue-taps {
  flex: 1 1 100%;
}

.venue-address,
.venue-website,
.venue-email,
.venue-phone {
  display: block;
  position: relative;
  padding: 0.25rem 0 0.25rem 1.5rem;
}

.venue-address:before,
.venue-website:before,
.venue-email:before,
.venue-phone:before {
  width: 1rem;
  height: 1rem;
  display: block;
  position: absolute;
  left: 0;
  top: 0.375rem;
  opacity: 0.7;
}

.venue-address:before {
  content: url(~assets/placeholder.svg);
}

.venue-website:before {
  content: url(~assets/internet.svg);
}

.venue-email:before {
  content: url(~assets/mail.svg);
}

.venue-phone:before {
  content: url(~assets/telephone.svg);
}

.venue-social {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1rem 0;
  margin-top: 1.5rem;
}

.venue-social a {
  padding: 0.5rem;
  opacity: 0.6;
  border-radius: 4px;
}

.venue-social a:hover {
  background: #e5e5e5;
  opacity: 1;
}

.venue-social a span {
  max-width: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  margin-left: 0;
  transition: max-width 0.2s ease 0.05s, margin 0.2s ease 0.05s;
}

.venue-social img {
  width: 1.5rem;
  height: 1.5rem;
}

@media (min-width: 576px) {
  .venue-social a:hover span {
    max-width: 100px;
    margin-left: 0.5rem;
  }
}
</style>
