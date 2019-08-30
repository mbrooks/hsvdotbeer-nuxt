<template>
  <div class="container-list">
    <ul id="beer-list">
      <beer-item v-for="beer in beers" :key="beer.id" :beer="beer"></beer-item>
    </ul>
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
      bottom: false
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

#beer-list {
  padding: 0;
  list-style: none;
}
</style>
