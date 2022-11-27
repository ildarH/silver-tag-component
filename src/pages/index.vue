<template>
  <app-main />
</template>

<script lang="ts">
import Vue from 'vue';
import AppMain from '@/components/AppMain.vue';

// @vue/component
export default Vue.extend({
  name: 'index-page',
  components: { AppMain },
});
</script>
