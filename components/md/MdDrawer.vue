<template>
  <div :class="[drawerClasses]" class="md-drawer">
    <slot />
    <md-overlay v-if="mdFixed" :md-active="mdActive" @click="closeDrawer" />
    <md-overlay v-else :md-active="mdActive" md-attach-to-parent @click="closeDrawer" />
  </div>
</template>

<script>
import MdOverlay from '~/components/md/MdOverlay.vue'

export default {
  name: 'MdDrawer',
  components: {
    MdOverlay
  },
  props: {
    mdActive: Boolean,
    mdFixed: Boolean
  },
  data: () => ({
    mdRight: false,
    mdPermanent: false,
    mdPersistent: false
  }),
  computed: {
    drawerClasses () {
      const classes = {
        'md-left': !this.mdRight,
        'md-right': this.mdRight,
        'md-temporary': this.isTemporary,
        'md-persistent': this.mdPersistent,
        'md-permanent': this.mdPermanent,
        'md-active': this.mdActive,
        'md-fixed': this.mdFixed
      }

      if (this.mdPermanent) {
        classes['md-permanent-' + this.mdPermanent] = true
      }

      if (this.mdPersistent) {
        classes['md-persistent-' + this.mdPersistent] = true
      }

      return classes
    },
    isTemporary () {
      return !this.mdPermanent && !this.mdPersistent
    },
    mode () {
      if (this.mdPersistent) {
        return 'persistent'
      }

      if (this.mdPermanent) {
        return 'permanent'
      }

      return 'temporary'
    },
    submode () {
      if (this.mdPersistent) {
        return this.mdPersistent
      }

      if (this.mdPermanent) {
        return this.mdPermanent
      }
      return null
    },
    mdSwipeElement () {
      return this.$el.parentNode
    }
  },
  watch: {
    mdActive (visible) {
      if (visible) {
        this.$emit('md-opened')
      } else {
        this.$emit('md-closed')
      }
    },
    swiped (value) {
      if (value === 'right' || value === 'left') {
        this.$emit('update:mdActive', value === 'right')
      }
    }
  },
  methods: {
    closeDrawer () {
      this.$emit('update:mdActive', false)
    }
  }
}
</script>

<style>
@media (min-width: 600px) {
  .md-app-drawer.md-permanent-card + .md-app-scroller .md-content {
    padding-left: 0;
    padding-right: 0;
    border-left: none;
    border-right: none;
  }
  .md-app-content {
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }
}

.md-app-internal-drawer,
.md-app-side-drawer .md-app-container {
  flex-direction: column;
}

.md-app-internal-drawer .md-app-scroller {
  overflow: auto;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 101;
  transform: translate3D(-100%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  will-change: transform, box-shadow;
  overflow-x: hidden;
  overflow-y: auto;
  background: #fff;
  padding: 1rem;
}

.md-drawer.md-right {
  right: 0;
  left: auto;
  transform: translate3D(100%, 0, 0);
}

.md-drawer.md-fixed {
  position: fixed;
}

.md-drawer.md-active {
  transform: translate3D(0, 0, 0);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.md-drawer.md-temporary.md-left + .md-app-container .md-content {
  border-left: none;
}

.md-drawer.md-temporary.md-right-previous + .md-app-container .md-content {
  border-right: none;
}

.md-drawer.md-temporary.md-active {
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12);
}

.md-drawer.md-persistent:not(.md-active).md-left + .md-app-container .md-content {
  border-left: none;
}

.md-drawer.md-persistent:not(.md-active).md-right-previous + .md-app-container .md-content {
  border-right: none;
}

.md-drawer.md-persistent-mini {
  transform: translate3D(0, 64px, 0);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, width;
  will-change: transform, box-shadow;
}

.md-drawer.md-persistent-mini.md-left {
  border-right: 1px solid;
}

.md-drawer.md-persistent-mini.md-right {
  border-left: 1px solid;
}

.md-drawer.md-persistent-mini.md-active.md-left + .md-app-container .md-content {
  border-left: none;
}

.md-drawer.md-persistent-mini.md-active.md-right-previous + .md-app-container .md-content {
  border-right: none;
}

.md-drawer.md-persistent-mini:not(.md-active) {
  width: 70px !important;
  z-index: 1;
  white-space: nowrap;
}

.md-drawer.md-persistent-mini:not(.md-active) .md-toolbar {
  display: none;
}

.md-drawer.md-persistent-mini:not(.md-active) .md-list-item-content {
  padding: 0 23px;
}

.md-drawer.md-persistent-mini.md-active {
  position: relative;
  transform: translate3D(0, 0, 0);
  white-space: normal;
}

.md-drawer .md-list-item-container {
  font-size: 14px;
  text-transform: none;
}

.md-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: opacity;
  will-change: opacity;
}

@media (max-width: 600px) {
  .md-drawer {
    width: 320px;
  }
  .md-drawer.md-active {
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12);
  }
}

@media (min-width: 600px) {
  .md-drawer:not(.md-temporary) ~ .md-overlay {
    background: none;
    pointer-events: none;
  }
  .md-drawer.md-permanent {
    position: relative;
    transform: translate3D(0, 0, 0);
  }
  .md-drawer.md-permanent-full {
    z-index: 3;
  }
  .md-drawer.md-permanent-full .md-list {
    padding-top: 0;
  }
  .md-drawer.md-permanent-card,
  .md-drawer.md-permanent-clipped {
    z-index: 1;
  }
  .md-drawer.md-permanent-card {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    position: relative;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: color, background-color;
    will-change: color, background-color;
    margin: 8px;
    z-index: 1;
  }
}

@media (min-width: 960px) {
  .md-drawer.md-permanent-card {
    margin: 16px;
  }
}

@media (min-width: 1280px) {
  .md-drawer.md-permanent-card {
    margin: 24px;
  }
}
</style>
