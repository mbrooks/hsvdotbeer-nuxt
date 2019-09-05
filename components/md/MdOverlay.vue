<template>
  <md-portal :md-attach-to-parent="mdAttachToParent">
    <transition name="md-overlay">
      <div v-if="mdActive" class="md-overlay" :class="overlayClasses" v-on="$listeners"></div>
    </transition>
  </md-portal>
</template>

<script>
import MdPortal from '~/components/md/MdPortal'
export default {
  name: 'MdOverlay',
  components: {
    MdPortal
  },
  props: {
    mdActive: Boolean,
    mdAttachToParent: Boolean,
    mdFixed: Boolean
  },
  computed: {
    overlayClasses() {
      return {
        'md-fixed': this.mdFixed
      }
    }
  }
}
</script>

<style>
.md-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  overflow: hidden;
  background: rgba(#000, 0.6);
  transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: opacity;
  will-change: opacity;
}

.md-overlay-enter,
.md-overlay-leave-active {
  opacity: 0;
}
</style>
