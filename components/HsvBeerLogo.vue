<template>
  <div class="hsv-beer-logo">
    <span ref="particletext" class="particletext bubbles">
      <b-img-lazy ref="logo" class="brand-logo" src="~/assets/hsv-beer-logo.svg" alt="hsv.beer" />
      <template v-for="p in particles">
        <span :key="p.id" :style="p.style" class="particle" />
      </template>
    </span>
  </div>
</template>

<script>
function rnd (m, n) {
  const mm = parseInt(m, 10)
  const nn = parseInt(n, 10)
  return Math.floor(Math.random() * (nn - mm + 1)) + mm
}

export default {
  name: 'HsvBeerLogo',
  computed: {
    particles () {
      const results = []
      const bubblecount = 12
      for (let i = 0; i <= bubblecount; i += 1) {
        const size = rnd(40, 80) / 10
        const top = rnd(0, 60)
        const left = rnd(0, 95)
        const delay = rnd(0, 30) / 10
        results.push({
          id: i,
          style: {
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            'animation-delay': `${delay}s`
          }
        })
      }
      return results
    }
  }
}
</script>

<style>
body .particletext {
  position: relative;
  z-index: 5;
}
body .particletext.bubbles > .particle {
  opacity: 0;
  position: absolute;
  background-color: transparent;
  -webkit-animation: bubbles 3s ease-in infinite;
  animation: bubbles 3s ease-in infinite;
  border-radius: 100%;
  border: 0.75px solid rgba(255, 255, 255, 0.8);
  z-index: -1;
}

@keyframes bubbles {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.3;
    -webkit-transform: translate(0, -20%);
    transform: translate(0, -20%);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(0, -1000%);
    transform: translate(0, -1000%);
  }
}
</style>
