<template>
  <div class="container-fluid">
    <div class="results-header">
      <h2 class="results-number">
        <span class="beer-total">{{ beerCount }}</span>
        <span class="d-none">matching</span> beers on tap at
        <b-link v-if="venue" @click="openModal(venue)">
          {{ venue.name }}
        </b-link>
      </h2>
      <sort-widget @updated="updateBeers($event)" />
    </div>

    <beer-list />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BeerList from '~/components/BeerList'
import SortWidget from '~/components/SortWidget'

export default {
  components: {
    BeerList,
    SortWidget
  },
  computed: {
    ...mapState({
      beerCount: state => state.beers.count
    }),
    slug () { return this.$route.params.slug },
    venue () {
      return this.$store.getters['venues/bySlug'](this.slug)
    }
  },
  async fetch ({ store, params, query }) {
    await store.dispatch('beers/loadPage', {
      options: { on_tap: true, taps__venue__slug: params.slug, o: 'name' }
    })
  },
  methods: {
    openModal (venue) {
      this.$store.commit('SHOW_MODAL', venue)
    },
    updateBeers (ordering) {
      this.$store.dispatch('beers/loadPage', {
        options: { on_tap: true, taps__venue__slug: this.slug, o: ordering }
      })
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('HIDE_MODAL')
    next()
  }
}
</script>

<style>
.container-results-header {
  border-bottom: 1px solid #ddd;
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 0.5rem 0;
}

.results-number {
  font-size: 1rem;
  margin: 0;
}

.beer-total {
  font-weight: 700;
}
</style>
