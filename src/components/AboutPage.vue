<template>
  <div
    id="about"
    class="grid max-h-[85rem] min-h-[50rem] w-full items-center justify-around bg-[#F1F9F9] px-small-lite py-medium pt-[9.6rem] md:grid-cols-2 md:px-medium md:pt-[9.6rem]"
  >
    <div class="max-w-4/5 relative">
      <img
        src="../assets/about-check-icon.png"
        alt=""
        class="absolute right-10 top-10 block w-20 md:right-40"
      />
      <img src="../assets/about-icon.png" alt="" class="" />
    </div>
    <div class="text-dark" id="about">
      <h2 class="mt-small text-[3.6rem] font-bold md:mt-0">About Divest</h2>
      <p class="my-small md:my-thin">
        Divest is the leading remittance platform that enables users from around
        the world to seamlessly send money directly into the bank accounts of
        individuals and businesses in supported African countries. With Divest,
        you can effortlessly convert your cryptocurrencies into fiat and have it
        instantly credited to any bank account of your choice.
      </p>
      <AppDownload />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppDownload from './resuables/AppDownload.vue';
</script>

<style scoped></style>
