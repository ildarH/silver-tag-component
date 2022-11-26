<template>
  <div>
    <ui-icon :icon="ICONS.BUS" />
    <ui-name :name="TAG.ON_BUS"></ui-name>
    <ui-icon :icon="ICONS.DIVIDER" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UiIcon from '@/components/Ui/Tag/Icon.vue';
import UiName from '@/components/Ui/Tag/Name.vue';
import { ICONS, TAG } from '@/utils';

// @vue/component
export default Vue.extend({
  name: 'base-tag',
  components: { UiName, UiIcon },
  data() {
    return {
      ICONS,
      TAG,
    };
  },
});
</script>

<style scoped>

</style>
