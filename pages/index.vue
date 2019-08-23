<template>
  <div class="container-fluid">
    <div class="results-header">
      <h2 class="results-number">
        <span class="beer-total">{{ beerCount }}</span>
        <span class="d-none">matching</span> beers on tap
      </h2>
    </div>
    <div class="container-list">
      <ul id="beer-list">
        <beer-item v-for="beer in beers" :key="beer.id" :beer="beer">
        </beer-item>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BeerItem from '~/components/BeerItem'

export default {
  components: {
    BeerItem
  },
  data() {
    return {
      bottom: false,
      selected_venue: false
    }
  },
  computed: {
    ...mapState({
      next: (state) => state.beers.links.next,
      beerCount: (state) => state.beers.count,
      beers: (state) => state.beers.records
    })
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.$store.dispatch('beers/loadNextPage')
      }
    }
  },
  async fetch({ store }) {
    await store.dispatch('beers/loadPage', {
      options: { on_tap: true, o: 'name' }
    })
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight - 250
      return bottomOfPage || pageHeight < visible
    }
  }
}
</script>

<style>
.container-list {
  margin: 0 -1rem;
}

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

#beer-list {
  padding: 0;
  list-style: none;
}
</style>
