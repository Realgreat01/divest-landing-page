<template>
  <div
    class="main-landing-page min-h-[95vh] w-full items-center justify-center px-small-lite md:max-h-[90vh] md:grid-cols-2 md:px-medium"
  >
    <div class="pt-medium md:pt-0">
      <p class="text-[4rem] font-bold md:text-[6.4rem]">
        Instant
        <span class="text-brand">Crypto</span>
        to
        <span class="text-brand">Cash</span>
        Conversion
      </p>
      <p class="my-small-lite w-full text-small-lite md:w-[80%]">
        Instantly convert crypto to cash in 100 seconds or less, directly into
        your bank account!
      </p>
      <AppDownload />
    </div>
    <div class="mt-medium flex items-center justify-center md:mt-0">
      <img
        src="../assets/landing-page-phone.png"
        alt=""
        class="block w-[36rem] md:ml-auto md:h-[45rem] md:w-[45rem]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppstoreIcon from '@/icons/AppstoreIcon.vue';
import PlayStoreIcon from '@/icons/PlaystoreIcon.vue';
import { shallowRef } from 'vue';
import AppDownload from './resuables/AppDownload.vue';

const actionButtons = shallowRef([
  { icon: PlayStoreIcon, title: 'Android', link: '' },
  { icon: AppstoreIcon, title: 'Iphone', link: '' },
]);
</script>

<style scoped>
.main-landing-page {
  background-image: url('../assets/landing-page-background.png');
}
</style>
