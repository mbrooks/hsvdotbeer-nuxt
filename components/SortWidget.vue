<template>
  <div class="sort">
    <b-link class="sort-button btn btn-outline-light" />
    <div class="sort-options z-3">
      <div class="sort-options-header">
        Sort by:
      </div>
      <ul>
        <li v-for="s in sort" :key="s.name">
          <b-link :class="{selected: s.name === selected_sort.name }" @click="onSortChange(s)">
            {{ s.name }}
          </b-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sort: [
        { name: 'Name', sort: 'name' },
        { name: 'Brewery', sort: 'manufacturer' },
        { name: 'Style', sort: 'style' },
        { name: 'ABV', sort: 'abv' }],
      invert_sort: false,
      selected_sort: { name: 'Name', sort: 'name' }
    }
  },
  methods: {
    getOrdering () {
      let ordering = ''
      const sort = this.selected_sort.sort

      if (sort === 'name') {
        ordering = 'name'
      } else if (sort === 'manufacturer') {
        ordering = 'manufacturer__name'
      } else if (sort === 'style') {
        ordering = 'style__name'
      } else if (sort === 'abv') {
        ordering = 'abv'
      } else {
        // Default to name
        ordering = 'name'
      }

      if (this.invert_sort) {
        ordering = `-${ordering}`
      }
      return ordering
    },
    onSortChange (newSort) {
      if (this.selected_sort.sort === newSort.sort) {
        this.invert_sort = !this.invert_sort
      } else {
        this.selected_sort = newSort
        this.invert_sort = false
      }
      this.$emit('updated', this.getOrdering())
    }
  }
}
</script>

<style scoped>
.sort {
  flex:0 1 auto;
  padding-left:1rem;
  position:relative;
}
.sort-button {
  padding:.75rem;
}
.sort-button:before {
  content: "";
  background-image: url("~assets/filter-results-button.svg");
  width: 1rem;
  height: 1rem;
  display:block;
  background-size:1rem;
}
.sort-options {
  display:none;
  position:absolute;
  right:0;
  top:2.75rem;
  width:8rem;
  background:#fffbee;
  z-index:1000;
}
.sort:hover .sort-options {
  display:block;
}
.sort-options-header {
  padding:1rem 1rem .5rem;
  font-weight:700;
}
.sort-options ul {
  list-style:none;
  padding-left:0;
  margin-bottom:0;
}
.sort-options ul li a {
  display:block;
  padding: .5rem 1rem;
}
.sort-options ul li a.selected {
  border-left:.5rem solid #febf01;
}
.sort-options ul li a:hover {
  background:rgba(0,0,0,0.1);
  text-decoration:none;
}
</style>
