<template>
  <div>
    <div class="grid w-fit grid-cols-2 gap-small">
      <a
        :href="link.link"
        class="flex h-medium w-full cursor-pointer items-center justify-between gap-x-normal rounded-light bg-brand px-thin text-left text-white"
        v-for="(link, index) in DownloadLinks"
        :key="index"
      >
        <component :is="link.icon" />
        <div class="">
          <p class="text-thin">Download For</p>
          <p class="">{{ link.phone }}</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppstoreIcon from '@/icons/AppstoreIcon.vue';
import PlayStoreIcon from '@/icons/PlaystoreIcon.vue';
import { shallowRef } from 'vue';
const DownloadLinks = shallowRef([
  { icon: PlayStoreIcon, phone: 'Android', link: '' },
  { icon: AppstoreIcon, phone: 'IPhone', link: '' },
]);
</script>
