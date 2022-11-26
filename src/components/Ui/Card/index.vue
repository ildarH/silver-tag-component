<template>
  <div class="card">
    <slot name="card-title" />
    <slot name="card-content" />
    <slot name="card-footer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'base-card',
});
</script>

<style scoped lang="scss">
  .card {
    position: relative;
    background-color: #eae9e9;
    border-radius: 8px;
    box-shadow: 0 1px 2px #9a9a9a
  }
</style>
