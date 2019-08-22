<template>
  <div class="container-fluid">
    <div class="results-header">
      <h2 class="results-number">
        <span class="beer-total">100</span> beers on tap
      </h2>
    </div>
    <div class="container-list"></div>
  </div>
</template>

<script>
export default {}
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
</style>
