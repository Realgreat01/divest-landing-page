<template>
  <div
    class="grid max-h-[85rem] min-h-[50rem] w-full grid-cols-2 items-center justify-around bg-[#F1F9F9] px-medium"
  >
    <div class="" id="about">
      <img src="../assets/about-icon.png" alt="" class="" />
    </div>
    <div class="text-dark">
      <h2 class="text-[3.6rem] font-bold">About Divest</h2>
      <p class="my-thin">
        Divest is the leading remittance platform that enables users from around
        the world to seamlessly send money directly into the bank accounts of
        individuals and businesses in supported African countries. With Divest,
        you can effortlessly convert your cryptocurrencies into fiat and have it
        instantly credited to any bank account of your choice.
      </p>
      <div class="flex gap-small">
        <PlaystoreIcon />
        <AppstoreIcon />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlaystoreIcon from "@/icons/PlaystoreIcon.vue";
import AppstoreIcon from "@/icons/AppstoreIcon.vue";
</script>

<style scoped></style>
