<template>
  <v-card
    :loading="isLoading"
    :disabled="disabled"
    :elevation="elevation"
    :outlined="outlined"
    :tile="tile"
  >
    <v-card-title>
      <slot name="card-title" />
    </v-card-title>
    <v-card-text>
      <slot name="card-content" />
    </v-card-text>
    <v-card-actions>
      <slot name="card-actions" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { BaseCardOptionsProp } from '@/@types/props';

export default Vue.extend({
  name: 'base-card',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    cardOptions: {
      type: Object as PropType<BaseCardOptionsProp>,
    },
  },
  computed: {
    elevation(): string {
      return `${this.cardOptions?.elevation || 2}`;
    },
    disabled(): boolean {
      return this.cardOptions?.disabled || false;
    },
    outlined(): boolean {
      return this.cardOptions?.outlined || false;
    },
    tile(): boolean {
      return this.cardOptions?.tile || false;
    },
  },
});
</script>
