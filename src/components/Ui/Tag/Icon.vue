<template>
  <v-icon>{{ icon }}</v-icon>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { ICONS } from '@/@types';

// @vue/component
export default Vue.extend({
  name: 'ui-icon',
  props: {
    icon: {
      type: String as PropType<typeof ICONS[keyof typeof ICONS]>,
      default: '',
      validator(value: ICONS | string) {
        const available = Object.values(ICONS);
        return available.includes(value as ICONS);
      },
    },
  },
});

</script>

<style scoped>

</style>
