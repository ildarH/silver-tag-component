<template>
  <v-app>
    <v-app-bar
      app
      color="amber"
      dark
    >
    </v-app-bar>

    <v-main>
      <index-page />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import IndexPage from '@/pages/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    IndexPage,
  },
});
</script>

<style>
  @import './assets/scss/_reset.css';
</style>
