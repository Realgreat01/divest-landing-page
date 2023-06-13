<template>
  <div
    class="main-landing-page grid max-h-[90vh] min-h-[88vh] w-full grid-cols-2 items-center justify-around px-medium"
  >
    <div class="">
      <p class="text-[6.4rem] font-bold">
        Instant <span class="text-brand">Crypto</span> to
        <span class="text-brand">Cash</span> Conversion
      </p>
      <p class="my-thin w-[80%] text-small-lite">
        Instantly convert crypto to cash in 100 seconds or less, directly into
        your bank account!
      </p>
      <div class="flex gap-small">
        <AppstoreIcon />
        <PlayStoreIcon />
      </div>
    </div>
    <div class="">
      <img
        src="../assets/landing-page-phone.png"
        alt=""
        class="ml-auto h-[45rem] w-[45rem]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";
import AppstoreIcon from "@/icons/AppstoreIcon.vue";
import PlayStoreIcon from "@/icons/PlaystoreIcon.vue";
import ButtonComponent from "./resuables/ButtonComponent.vue";

const actionButtons = shallowRef([
  { icon: PlayStoreIcon, title: "Android", link: "" },
  { icon: AppstoreIcon, title: "Iphone", link: "" },
]);
</script>

<style scoped>
.main-landing-page {
  background-image: url("../assets/landing-page-background.png");
}
</style>
