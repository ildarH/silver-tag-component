<template>
  <v-app>
    <v-app-bar
      app
      color="amber"
      dark
    >
    </v-app-bar>

    <v-main>
      <v-container>
        <index-page />
      </v-container>
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

  data: () => ({
    //
  }),
});
</script>
