<template>
  <b-modal id="venue-modal" v-model="showModal" centered hide-footer content-class="z-5">
    <template v-if="venue" slot="default">
      <section class="venue">
        <div class="venue-logo-title">
          <img class="venue-logo" :src="venue.logo_url" alt>
          <h1 class="venue-title">
            {{ venue.name }}
          </h1>
        </div>
        <div class="venue-info">
          <b-link class="venue-info__link venue-info__link--address" :href="mapsUrl" target="_blank">
            <address class="venue-address">
              <span class="icon-prefix">
                <svg viewBox="0 0 24 24">
                  <path fill="#000000" d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
                </svg>
              </span>{{ venue.address }}, {{ venue.city }}, {{ venue.state }} {{ venue.postal_code }}
            </address>
          </b-link>
          <b-link v-if="venue.website" class="venue-info__link venue-info__link--website" :href="venue.website" target="_blank" rel="noreferrer">
            <span class="icon-prefix">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#000000" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </span>
            {{ formattedWebsite }}
          </b-link>
          <b-link v-if="venue.email" class="venue-info__link venue-info__link--email" :href="`mailto:${venue.email}`">
            <span class="icon-prefix">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#000000" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
              </svg>
            </span>
            {{ venue.email }}
          </b-link>
          <b-link v-if="venue.phone_number" class="venue-info__link venue-info__link--phone" :href="`tel:${venue.phone_number}`">
            <span class="icon-prefix">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#000000" d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" />
              </svg>
            </span>
            {{ formattedPhone }}
          </b-link>
          <div class="venue-social">
            <b-link v-if="untappd" class="btn venue-untappd" :href="untappd" target="_blank" rel="noreferrer">
              <svg class="venue-social__icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 13.3l-5.8 8.1c-.3.4-.8.7-1.3.6-.6 0-1.4-.3-2.2-.9S.4 19.8 0 19.3A1.4 1.4 0 0 1 .3 18L6 9.8a3 3 0 0 1 1-1l1.2-.6a122.7 122.7 0 0 1 5.3-5.4v-.2a.1.1 0 0 1 .1-.1h.2a.1.1 0 0 0 0-.2v-.2a.1.1 0 0 1 .2-.1c.2 0 .5 0 1 .4s.6.6.7.8a.1.1 0 0 1-.1.2h-.2a.1.1 0 0 0 0 .2v.1a.1.1 0 0 1-.1.1l-.2.1a122 122 0 0 1-3.2 6 2.2 2.2 0 0 0-.3.8l-.2 1.3a3 3 0 0 1-.5 1.3zm12.7 4.6L18 9.8a3 3 0 0 0-1-1l-1.2-.6a2.1 2.1 0 0 1-.6-.4 50.5 50.5 0 0 0-.6-.7h-.1a97.3 97.3 0 0 1-1.8 3.2 1.4 1.4 0 0 0-.1.5 3.5 3.5 0 0 0 0 1.1c0 .6.2 1 .5 1.4l5.8 8.1c.3.4.8.7 1.3.6a4.8 4.8 0 0 0 2.2-.9 4.8 4.8 0 0 0 1.6-1.8 1.4 1.4 0 0 0-.2-1.4zM8.3 3.4h.2a.1.1 0 0 1 0 .2v.1a.1.1 0 0 0 .1.1l.2.1a185.4 185.4 0 0 0 1 1.8L11.4 4a.1.1 0 0 0 0-.2l-1-1v-.2a.1.1 0 0 0-.1-.1H10a.1.1 0 0 1 0-.2v-.2a.1.1 0 0 0-.2-.1c-.2 0-.5 0-1 .4-.5.3-.6.6-.7.8a.1.1 0 0 0 .1.2z" />
              </svg>
              <span>Untappd</span>
            </b-link>
            <b-link v-if="facebook" class="btn venue-facebook" :href="facebook" target="_blank" rel="noreferrer">
              <svg class="venue-social__icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.4c0 .7.6 1.3 1.3 1.3h11.5v-9.3H9.7v-3.6h3.1V8.4c0-3 2-4.8 4.7-4.8l2.8.2V7h-2c-1.4 0-1.7.7-1.7 1.8V11H20l-.4 3.6h-3.1V24h6c.8 0 1.4-.6 1.4-1.3V1.3c0-.7-.6-1.3-1.3-1.3" />
              </svg>
              <span>Facebook</span>
            </b-link>
            <b-link v-if="instagram" class="btn venue-instagram" :href="instagram" target="_blank" rel="noreferrer">
              <svg class="venue-social__icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0H7C5.9.2 5 .4 4.2.7c-.7.3-1.4.7-2 1.4S.8 3.4.5 4.1c-.3.8-.5 1.7-.5 3a83.6 83.6 0 0 0 .5 12.8c.3.7.7 1.4 1.4 2 .7.8 1.3 1.2 2.1 1.5.8.3 1.7.5 3 .5a83.6 83.6 0 0 0 12.8-.5c.7-.3 1.4-.7 2-1.4.8-.7 1.2-1.3 1.5-2.1.3-.8.5-1.7.5-3a83.6 83.6 0 0 0-.5-12.8c-.3-.7-.7-1.4-1.4-2-.7-.8-1.3-1.2-2.1-1.5-.8-.3-1.7-.5-3-.5L12 0zm0 2.2h4.8c1.2 0 1.9.3 2.3.4.5.3 1 .5 1.4 1 .4.4.6.8.9 1.3.1.4.3 1 .4 2.2a84 84 0 0 1-.5 12c-.2.5-.4 1-.9 1.4-.4.4-.8.6-1.3.9-.5.1-1.1.3-2.3.4a84.5 84.5 0 0 1-12-.5c-.5-.2-.9-.4-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.5-.4-1.1-.4-2.3V12 7c0-1.1.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4H12zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.8-10.4a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z" />
              </svg>
              <span>Instagram</span>
            </b-link>
            <b-link v-if="twitter" class="btn venue-twitter" :href="twitter" target="_blank" rel="noreferrer">
              <svg class="venue-social__icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.6c-1 .4-1.9.6-2.9.7a5 5 0 0 0 2.2-2.7c-1 .6-2 1-3.1 1.2-1-1-2.2-1.6-3.6-1.6a5 5 0 0 0-4.8 6 14 14 0 0 1-10.2-5c-.4.7-.6 1.5-.6 2.4a5 5 0 0 0 2.2 4.1c-.8 0-1.6-.2-2.3-.6A5 5 0 0 0 5 14a5 5 0 0 1-2.2 0 5 5 0 0 0 4.6 3.5 9.9 9.9 0 0 1-7.3 2 14 14 0 0 0 7.6 2.3c9 0 14-7.5 14-14V7A10 10 0 0 0 24 4.6z" />
              </svg>
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
    },
    formattedPhone () {
      const regex = /(\d\d\d)(\d\d\d)(\d\d\d\d)/
      if (this.venue.phone_number && this.venue.phone_number.match(regex)) {
        return this.venue.phone_number.replace(regex, '($1) $2-$3')
      }
      return this.venue.phone_number
    },
    formattedWebsite () {
      const regex = /http(s)?:\/\/(www.)?/
      if (this.venue.website && this.venue.website.match(regex)) {
        const formatted = this.venue.website.replace(regex, '')
        if (formatted.endsWith('/')) {
          return formatted.substr(0, formatted.length - 1)
        }
        return formatted
      }
      return this.venue.website
    }
  }
}
</script>

<style>
.modal-header {
  border-bottom: none;
  padding: 0;
}

.modal-header .close {
  position: absolute;
  right: 1rem;
  margin-top: 0rem;
  font-size: 2rem;
  line-height: 0.7;
  font-weight: 500;
  z-index: 1041;
}

.modal-body {
  padding: 2rem;
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
  margin-bottom: 1rem;
}

.venue-info {
  display: flex;
  flex-wrap: wrap;
  line-height: 2;
  border-top: .5px solid #ccc;
  margin-left: -2rem;
  margin-right: -2rem;
  overflow: hidden;
}

.venue-social {
  flex: 1 1 33.333%;
  min-width: 240px;
}

.venue-taps {
  flex: 1 1 100%;
}

.venue-info__link {
  display: block;
  width: 100%;
  color: #31302c;
  position: relative;
  padding: 0.5rem 1rem;
  border-bottom: .5px solid #ccc;
}

.venue-info__link:hover {
  background: rgba(0,0,0,0.1);
  text-decoration: none;
}

.venue-info__link--website,
.venue-info__link--email,
.venue-info__link--phone {
  display: flex;
}

.icon-prefix {
  display: inline-block;
  width: 2em;
  height: 2em;
  margin-right: .5em;
}

.icon-prefix>svg>path {
  fill: #f5bd00;
}

.venue-address {
  display: flex;
  margin-bottom: 0;
}

.venue-social {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1rem 0 0;
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

.venue-social__icon {
  width: 1.5rem;
  height: 1.5rem;
}

.venue-untappd:hover .venue-social__icon>path {
  fill: #ffc000;
}

.venue-facebook:hover .venue-social__icon>path {
  fill: #1877f2;
}

.venue-instagram:hover .venue-social__icon>path {
  fill: #c32aa3;
}

.venue-twitter:hover .venue-social__icon>path {
  fill: #1da1f2;
}

@media (min-width: 576px) {
  .venue-social a:hover span {
    max-width: 100px;
    margin-left: 0.5rem;
  }
}
</style>
