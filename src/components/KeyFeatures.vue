<template>
  <div
    class="p-small-lite pt-[9.6rem] text-dark md:p-medium md:pt-[9.6rem]"
    id="key-features"
  >
    <div class="w-full md:mx-auto md:my-medium md:w-1/2 md:text-center">
      <h2 class="text-[3.6rem] font-bold">Key Features</h2>
      <p class="my-small w-4/5 md:mx-auto">
        Divest has amazing features to enable your transactions seamless and
        stress free across the globe.
      </p>
      <div class="flex w-full items-center justify-center">
        <AppDownload />
      </div>
    </div>
    <div
      class="m-normal-lite my-medium grid gap-x-[10rem] text-dark md:my-small md:grid-cols-3"
    >
      <div class="order-2 md:order-1">
        <div
          class="mb-small flex flex-col gap-3"
          v-for="(feature, index) in LeftSide"
          :key="index"
        >
          <div
            class="flex h-[4rem] w-[4rem] items-center justify-center rounded-[0.7rem] bg-brand"
          >
            <component :is="feature.icon" class="" />
          </div>
          <h2 class="font-bold">{{ feature.title }}</h2>
          <h2 class="">{{ feature.content }}</h2>
        </div>
      </div>
      <div class="order-1 mx-auto block md:order-2 md:w-full">
        <img src="../assets/key-features.png" alt="" class="w-full" />
      </div>

      <div class="order-3">
        <div
          class="mb-small ml-auto flex flex-col gap-3 justify-self-end"
          v-for="(feature, index) in RightSide"
          :key="index"
        >
          <div
            class="flex h-[4rem] w-[4rem] items-center justify-center rounded-[0.7rem] bg-brand"
          >
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
import AssetsIcon from '@/icons/AssetsIcon.vue';
import GlobeIcon from '@/icons/GlobeIcon.vue';
import TransferIcon from '@/icons/TransferIcon.vue';
import TransparentIcon from '@/icons/TransparentIcon.vue';
import { shallowRef } from 'vue';
import AppDownload from './resuables/AppDownload.vue';

const LeftSide = shallowRef([
  {
    icon: TransferIcon,
    title: 'Lightning Fast Transfers',
    content:
      'Our platform can convert your crypto to cash in 100 seconds or less, giving you instant access to your funds.',
  },
  {
    icon: AssetsIcon,
    title: 'No Asset Holding',
    content:
      "We don't hold your assets - we directly convert your crypto into your chosen bank account in any of our supported cashout countries.",
  },
]);
const RightSide = shallowRef([
  {
    icon: TransparentIcon,
    title: 'Transparent Pricing',
    content:
      'Our pricing model is simple and transparent, with no hidden fees or charges.',
  },
  {
    icon: GlobeIcon,
    title: 'Remittance Solution',
    content:
      'Our platform can also serve as a remittance solution, providing fast and secure transfers at competitive rates.',
  },
]);
</script>

<style scoped></style>
