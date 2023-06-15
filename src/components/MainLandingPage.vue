<template>
  <div
    class="main-landing-page mb-medium grid min-h-[88vh] w-full items-center justify-center px-small-lite md:grid-cols-2 md:px-medium"
  >
    <div class="pt-medium md:pt-0">
      <p class="text-[4rem] font-bold md:text-[6.4rem]">
        Instant
        <span class="text-brand">Crypto</span>
        to
        <span class="text-brand">Cash</span>
        Conversion
      </p>
      <p class="my-thin text-small-lite md:w-[80%]">
        Instantly convert crypto to cash in 100 seconds or less, directly into
        your bank account!
      </p>
      <AppDownload />
    </div>
    <div class="mx-auto">
      <img
        src="../assets/landing-page-phone.png"
        alt=""
        class="block w-[34rem] md:ml-auto md:w-[45rem]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppDownload from './resuables/AppDownload.vue';
</script>

<style scoped>
.main-landing-page {
  background-image: url('../assets/landing-page-background.png');
}
</style>
