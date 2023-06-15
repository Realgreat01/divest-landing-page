<template>
  <div>
    <div class="flex gap-small">
      <PlayStoreIcon />
      <AppstoreIcon />
    </div>
  </div>
</template>
<script setup lang="ts">
import AppstoreIcon from '@/icons/AppstoreIcon.vue';
import PlayStoreIcon from '@/icons/PlaystoreIcon.vue';
import { shallowRef } from 'vue';
const actionButtons = shallowRef([
  { icon: PlayStoreIcon, title: 'Android', link: '' },
  { icon: AppstoreIcon, title: 'Iphone', link: '' },
]);
</script>
