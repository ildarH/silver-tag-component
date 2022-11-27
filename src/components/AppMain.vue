<template>
  <v-container>
  <v-row>
    <v-col>
      <base-card>
        <template #card-title>{{ posts[0].title }}</template>
        <template #card-content>
          <base-tags
            :id="posts[0].id"
            :tags-list="posts[0].tags"
          />
        </template>
      </base-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <base-card>
        <template #card-title>{{ posts[1].title }}</template>
        <template #card-content>
          <base-tags
            :id="posts[1].id"
            :tags-list="posts[1].tags"
            align="justify"
          />
        </template>
      </base-card>
    </v-col>
  </v-row>
  <v-row v-for="post in posts.slice(2)" :key="post.title">
    <v-col cols="6">
      <base-card>
        <template #card-title>{{ post.title }}</template>
        <template #card-content>
          <base-tags
            :id="post.id"
            :tags-list="post.tags" />
        </template>
      </base-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { v4 as uuidv4 } from 'uuid';
import BaseCard from '@/components/Ui/Card/index.vue';
import { ICONS, IPost, TAG } from '@/@types';
import BaseTags from '@/components/Tags/index.vue';

export default Vue.extend({
  name: 'app-main',
  components: { BaseTags, BaseCard },
  data() {
    return {
      posts: [
        {
          id: uuidv4(),
          title: 'Город сыра и мира',
          tags: [
            { tag: TAG.STAR, icon: ICONS.STAR, value: 5 },
            { tag: TAG.HISTORICAL },
            { tag: TAG.ON_BUS, icon: ICONS.BUS },
            { tag: TAG.DATE, value: '28 марта' },
            { tag: TAG.DURATION, icon: ICONS.CLOCK, value: '9 часов' },
          ],
        },
        {
          id: uuidv4(),
          title: 'Экскурсия в национальный парк Куршская коса',
          tags: [
            { tag: TAG.STAR, icon: ICONS.STAR, value: 5 },
            { tag: TAG.OVERVIEW },
            { tag: TAG.ON_BUS, icon: ICONS.BUS },
            { tag: TAG.DATE, value: '25 марта' },
            { tag: TAG.DURATION, icon: ICONS.CLOCK, value: '6 часов' },
          ],
        },
        {
          id: uuidv4(),
          title: 'О кирхках, рыцарях и замках',
          tags: [
            { tag: TAG.STAR, icon: ICONS.STAR, value: 5 },
            { tag: TAG.HISTORICAL },
            { tag: TAG.ON_BUS, icon: ICONS.BUS },
            { tag: TAG.DATE, value: '29 марта' },
            { tag: TAG.DURATION, icon: ICONS.CLOCK, value: '6 часов' },
          ],
        },
        {
          id: uuidv4(),
          title: 'Экскурсия в Янтарный',
          tags: [
            { tag: TAG.HISTORICAL },
            { tag: TAG.ON_BUS, icon: ICONS.BUS },
            { tag: TAG.DATE, value: '29 марта' },
            { tag: TAG.DURATION, icon: ICONS.CLOCK, value: '6 часов' },
            { tag: TAG.USER, icon: ICONS.USER, value: 'до 49' },
          ],
        },
        {
          id: uuidv4(),
          title: 'Экскурсия в Янтарный',
          tags: [
            { tag: TAG.HISTORICAL },
            { tag: TAG.ON_BUS, icon: ICONS.BUS },
            { tag: TAG.DATE, value: '29 марта' },
            { tag: TAG.DURATION, icon: ICONS.CLOCK, value: '6 часов' },
            { tag: TAG.USER, icon: ICONS.USER, value: 'до 49' },
          ],
        },
        {
          id: uuidv4(),
          title: 'Экскурсия в Янтарный',
          tags: [
            { tag: TAG.HISTORICAL },
            { tag: TAG.ON_BUS, icon: ICONS.BUS },
            { tag: TAG.DATE, value: '29 марта' },
            { tag: TAG.DURATION, icon: ICONS.CLOCK, value: '6 часов' },
            { tag: TAG.USER, icon: ICONS.USER, value: 'до 49' },
          ],
        },
      ] as IPost[],
    };
  },
});
</script>

<style scoped lang="scss">
  .column {
    max-width: 200px;
  }
</style>
