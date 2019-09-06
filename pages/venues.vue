<template>
  <div class="container-fluid">
    <div class="container-list">
      <ul id="venue-list">
        <venue-item v-for="venue in venues" :key="venue.id" :venue="venue" />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VenueItem from '~/components/VenueItem'

export default {
  components: {
    VenueItem
  },
  computed: {
    ...mapState({
      venues: state => state.venues.records
    })
  },
  async fetch ({ store }) {
    await store.dispatch('venues/load')
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

.container-list {
  margin: 0 -1rem;
}

#venue-list {
  padding: 0;
  list-style: none;
}
</style>
