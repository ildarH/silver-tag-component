<template>
  <span class="tag d-inline-block align-center" :id="id" :ref="id" :data-width="width">
    <ui-icon class="mr-2 icon" v-if="tagItem.icon" :icon="tagItem.icon" />
    <ui-name :name="tagItem.tag" :value="tagItem.value" />
    <ui-icon class="icon" :icon="ICONS.DIVIDER" />
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import UiIcon from '@/components/Ui/Tag/Icon.vue';
import UiName from '@/components/Ui/Tag/Name.vue';
import {
  ICONS, TAG, TTag, TTagValue,
} from '@/@types';

// @vue/component
export default Vue.extend({
  name: 'base-tag',
  components: { UiName, UiIcon },
  props: {
    id: {
      type: String,
      required: true,
    },
    tagItem: {
      type: Object as PropType<TTag | TTagValue>,
      required: true,
      validator(item: TTag) {
        return Object.values(TAG).includes(item.tag);
      },
    },
  },
  data() {
    return {
      ICONS,
      TAG,
      tagEl: null as null | HTMLElement,
      width: 0,
    };
  },
  mounted() {
    this.tagEl = this.$refs[this.id] as HTMLElement;

    if (this.tagEl) {
      this.width = Math.ceil(this.tagEl.offsetWidth);
    }
  },
});
</script>

<style scoped lang="scss">
.tag {
  white-space: nowrap;
  &:hover {
    cursor: pointer;
  }
}
.icon {
  width: 24px;
}
</style>
