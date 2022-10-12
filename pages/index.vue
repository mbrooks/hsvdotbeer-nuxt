<template>
  <div class="container-fluid">
    <div class="results-header">
      <h2 class="results-number">
        <span class="beer-total">{{ beerCount }}</span>
        <span class="d-none">matching</span> beers on tap
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
  beforeRouteLeave (to, from, next) {
    this.$store.commit('HIDE_MODAL')
    next()
  },
  async fetch ({ store }) {
    await store.dispatch('beers/loadPage', {
      options: { on_tap: true, o: 'name' }
    })
  },
  computed: {
    ...mapState({
      beerCount: state => state.beers.count
    })
  },
  methods: {
    updateBeers (ordering) {
      this.$store.dispatch('beers/loadPage', {
        options: { on_tap: true, o: ordering }
      })
    }
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
