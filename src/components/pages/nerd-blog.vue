<template>
  <v-app id="inspire" dark>
    <transition name="slide-fade">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
export default {
  name: 'NerdBlog'
}
</script>

<style>
  .slide-fade-enter-active {
    transition: .4s ease-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-1000px);
    opacity: 0.5;
  }
</style>
