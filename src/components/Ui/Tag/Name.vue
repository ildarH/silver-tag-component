<template>
  <span>{{ tagName }}</span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { TAG } from '@/utils';

// @vue/component
export default Vue.extend({
  name: 'ui-name',
  props: {
    name: {
      type: String as PropType<typeof TAG[keyof typeof TAG]>,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    tagName(): string {
      const tags: Record<string, string> = {
        [TAG.ON_BUS]: 'На автобусе',
        [TAG.STAR]: `${this.value}`,
        [TAG.DATE]: `${this.value}`,
        [TAG.CAPACITY]: `${this.value}`,
        [TAG.DURATION]: `${this.value}`,
        [TAG.HISTORICAL]: 'Историческая',
        [TAG.OVERVIEW]: 'Обзорная',
      };
      return tags[this.name];
    },
  },
});

</script>

<style scoped>

</style>
