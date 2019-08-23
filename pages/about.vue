<template>
  <div class="container-fluid">
    <h1>About HSV.beer</h1>

    <p class="lead">
      HSV.beer is an open-source project helping Rocket City residents and
      visitors find draft beer at the many excellent breweries, bars, and
      retailers in the Huntsville area.
    </p>
    <p>
      Taprooms are constantly rotating kegs. This can make it difficult to find
      out who's serving your favorite beer. And once you arrive, those
      novel-length menus can be daunting when you're looking for a particular
      style or brewer.
    </p>
    <p>
      HSV.beer allows you to easily search the draft beer inventory of retailers
      all across the Huntsville area. See what's available at a particular
      taproom, or search all of Huntsville for a particular beer, manufacturer,
      or style.
    </p>

    <div class="alert alert-primary" role="alert">
      <strong>HSV.beer is currently in beta.</strong>
    </div>

    <h2>How it works</h2>
    <p>
      Most taprooms (retailers that serve draft beer) manage their inventory
      using software such as DigitalPour or Untappd. HSV.beer uses the APIs
      provided by these services, as well as custom-built parsers, to query the
      inventory of each taproom and return the results in one easy to read,
      searchable, sortable database, regardless of the inventory platform used.
    </p>

    <h3 class="h4">Don't see your favorite taproom?</h3>
    <p>
      We are only able to track the inventory of taprooms that make their
      taplist available online. If a Huntsville-area taproom does use digital
      inventory software and isn't listed on HSV.beer, it's likely because we
      don't yet have access to their taplist.
    </p>
    <p>
      <a href="mailto:getlisted@hsv.beer">List your taproom on hsv.beer</a>
    </p>
    <h2 id="contactUs">Contact Us</h2>
    <p>
      HSV.beer is an open-source project hosted on
      <a href="https://github.com/hsv-dot-beer" target="_blank">GitHub</a> with
      multiple contributors. The founding contributors are Huntsville residents
      and craft beer lovers Michael Carroll, Drew Winstel, and Drew McDowell.
    </p>
    <p>
      If you want to join the conversation, find us at #hsv-dot-beer on
      <a href="https://tech256.com" target="_blank">Tech256</a>
    </p>

    <div class="row text-center founders">
      <div class="col mb-4">
        <img class="mb-2" src="/img/carroll.jpeg" alt />
        <br />Michael Carroll
        <br />
        <a href="mailto:michael@hsv.beer">michael@hsv.beer</a>
      </div>
      <div class="col mb-4">
        <img class="mb-2" src="/img/winstel.jpeg" alt />
        <br />Drew Winstel
        <br />
        <a href="mailto:drew@hsv.beer">drew@hsv.beer</a>
      </div>
      <div class="col mb-4">
        <img class="mb-2" src="/img/mcdowell.jpeg" alt />
        <br />Drew McDowell
        <br />
        <a href="mailto:mcd@hsv.beer">mcd@hsv.beer</a>
      </div>
    </div>
    <p class="text-center">
      <a
        class="btn btn-primary"
        href="https://twitter.com/hsvdotbeer"
        target="_blank"
      >
        @hsvdotbeer
      </a>
    </p>
    <hr class="my-5" />
    <p class="text-muted">
      HSV.beer is meant as a reference only and is not responsible for
      inaccurate information.
    </p>
    <p class="text-muted">
      Please drink responsibly. Don't forget Lyft and Uber are available in
      Huntsville. :)
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style>
.founders img {
  max-width: 200px;
}
</style>
