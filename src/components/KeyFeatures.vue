<template>
  <div class="p-medium pt-[9.6rem] text-dark" id="key-features">
    <div class="mx-auto my-medium w-1/2 text-center">
      <h2 class="text-[3.6rem] font-bold">Key Features</h2>
      <p class="my-small">
        Divest has amazing features to enable your transactions seamless and
        stress free across the globe.
      </p>
      <div class="mx-auto flex justify-center gap-small">
        <PlayStoreIcon />
        <AppstoreIcon />
      </div>
    </div>
    <div class="my-small grid grid-cols-3 text-dark">
      <div class="w-[80%]">
        <div
          class="mb-small flex flex-col gap-2"
          v-for="(feature, index) in LeftSide"
          :key="index"
        >
          <div class="w-fit rounded-thin bg-brand p-4">
            <component :is="feature.icon" class="" />
          </div>
          <h2 class="font-bold">{{ feature.title }}</h2>
          <h2 class="">{{ feature.content }}</h2>
        </div>
      </div>
      <div class="">
        <img src="../assets/key-features.png" alt="" />
      </div>

      <div class="ml-auto w-[80%]">
        <div
          class="mb-small ml-auto flex flex-col gap-2 justify-self-end"
          v-for="(feature, index) in RightSide"
          :key="index"
        >
          <div class="w-fit rounded-thin bg-brand p-4">
            <component :is="feature.icon" class="" />
          </div>
          <h2 class="font-bold">{{ feature.title }}</h2>
          <h2 class="">{{ feature.content }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";
import PlayStoreIcon from "@/icons/PlaystoreIcon.vue";
import AppstoreIcon from "@/icons/AppstoreIcon.vue";
import AssetsIcon from "@/icons/AssetsIcon.vue";
import GlobeIcon from "@/icons/GlobeIcon.vue";
import TransferIcon from "@/icons/TransferIcon.vue";
import TransparentIcon from "@/icons/TransparentIcon.vue";

const LeftSide = shallowRef([
  {
    icon: TransferIcon,
    title: "Lightning Fast Transfers",
    content:
      "Our platform can convert your crypto to cash in 100 seconds or less, giving you instant access to your funds.",
  },
  {
    icon: AssetsIcon,
    title: "No Asset Holding",
    content:
      "We don't hold your assets - we directly convert your crypto into your chosen bank account in any of our supported cashout countries.",
  },
]);
const RightSide = shallowRef([
  {
    icon: TransparentIcon,
    title: "Transparent Pricing",
    content:
      "Our pricing model is simple and transparent, with no hidden fees or charges.",
  },
  {
    icon: GlobeIcon,
    title: "Remittance Solution",
    content:
      "Our platform can also serve as a remittance solution, providing fast and secure transfers at competitive rates.",
  },
]);
</script>

<style scoped></style>
