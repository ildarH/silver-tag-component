<template>
  <span class="text-no-wrap">{{ tagName }}</span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { TAG } from '@/@types';

// @vue/component
export default Vue.extend({
  name: 'ui-name',
  props: {
    name: {
      type: String as PropType<typeof TAG[keyof typeof TAG]>,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    tagName(): string {
      const tags: Record<string, string> = {
        [TAG.ON_BUS]: 'На автобусе',
        [TAG.HISTORICAL]: 'Историческая',
        [TAG.OVERVIEW]: 'Обзорная',
      };
      return tags[this.name] || `${this.value}`;
    },
  },
});

</script>

<style scoped>

</style>
