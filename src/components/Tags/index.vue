<template>
  <div :id="`tagList_${id}`"
       class="d-flex align-center"
      :class="{ 'justify-space-between': align === 'justify'}"
  >
    <template v-for="(item, index) in visibleTags">
      <base-tag
        :data-tag="id"
        :id="`${id}_${item.tag}_${index}`"
        :key="`${item.tag}_${index}`"
        :tag-item="item"
      />
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { TagList } from '@/@types';
import BaseTag from '@/components/Ui/Tag/index.vue';
import { TTagsAlign } from '@/@types/props';

export default Vue.extend({
  name: 'base-tags',
  components: { BaseTag },
  props: {
    id: {
      type: String,
      required: true,
    },
    tagsList: {
      type: Array as PropType<TagList>,
      required: true,
    },
    align: {
      type: String as PropType<TTagsAlign>,
      default: 'left',
    },
  },
  data() {
    return {
      tagsWidth: 0,
      parentWidth: 0,
      totalItemsToShow: this.tagsList.length,
      itemsToShow: this.tagsList.length,
      parentTag: null as null | HTMLElement,
      tagsEl: [] as HTMLElement[],
      nodeList: null as null | NodeList,
    };
  },
  computed: {
    lastHiddenTagEl(): HTMLElement | null {
      if (this.itemsToShow < this.totalItemsToShow) {
        return this.tagsEl[this.itemsToShow];
      }
      return null;
    },
    visibleTags(): TagList {
      return this.tagsList.slice(0, this.itemsToShow);
    },
  },
  watch: {
    parentWidth(current, previous) {
      if (current > 0 && current !== previous) {
        this.updateItemsToShow();
      }
    },
  },
  mounted() {
    this.parentTag = document.getElementById(`tagList_${this.id}`);

    this.getParentWidth();

    this.selectTags();
    this.getTagsWidth();

    window.addEventListener('resize', this.getParentWidth, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getParentWidth);
  },
  methods: {
    selectTags() {
      this.nodeList = document.querySelectorAll(`[data-tag="${this.id}"]`);
      if (this.nodeList) {
        this.nodeList.forEach((item) => {
          if (item.nodeType === Node.ELEMENT_NODE) {
            this.tagsEl.push(item as HTMLElement);
          }
        });
      }
    },
    getTagsWidth() {
      this.tagsWidth = 0;
      if (this.nodeList) {
        const tagsElementsArray: Node[] = Array.from(this.nodeList);

        tagsElementsArray.forEach((item) => {
          this.tagsWidth += (item as HTMLElement).offsetWidth;
        });
      }
    },
    getParentWidth() {
      if (this.parentTag) {
        this.parentWidth = this.parentTag.offsetWidth;
      } else {
        this.parentWidth = 0;
      }
    },
    updateItemsToShow() {
      if (this.parentWidth <= this.tagsWidth) {
        this.selectTags();
        this.getTagsWidth();
        this.itemsToShow = this.itemsToShow > 1
          ? this.itemsToShow - 1
          : 1;
      } else if (this.lastHiddenTagEl) {
        this.selectTags();
        this.getTagsWidth();
        const width = +(this.lastHiddenTagEl.dataset?.width || 0);
        if (this.tagsWidth + width <= this.parentWidth) {
          this.itemsToShow = this.itemsToShow < this.totalItemsToShow
            ? this.itemsToShow + 1
            : this.totalItemsToShow;
        }
      }
    },
  },

});
</script>

<style scoped>

</style>
