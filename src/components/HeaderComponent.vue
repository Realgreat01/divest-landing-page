<template>
  <div
    class="sticky top-0 z-50 flex h-[9.6rem] w-full grid-cols-[1fr,1fr,1fr] justify-between items-center gap-x-[3rem] bg-[#0D1912] px-medium-lite"
  >
    <LogoPlain class="w-[18rem] block" />
    <div class=" flex items-center justify-center gap-x-medium">
      <a
        class="text-[1.6rem] text-white hover:font-bold hover:text-brand"
        v-for="(route, index) in NavActions"
        :href="route.route"
        :key="index"
      >
        {{ route.title }}
      </a>
    </div>
    <div
      class="flex w-fit justify-end rounded-light border border-brand-600 px-medium-lite py-thin font-bold text-brand hover:bg-brand hover:text-white"
    >
      <ButtonComponent class="">
        <a href="#contact-us">Contact Us</a>
      </ButtonComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoPlain from '@/icons/LogoWhite.vue';
import { ref } from 'vue';
import ButtonComponent from './resuables/ButtonComponent.vue';

const NavActions = ref([
  { title: 'About', route: '#about' },
  { title: 'Key Features', route: '#key-features' },
  { title: 'Use Cases', route: '#use-cases' },
  { title: 'FAQs', route: '#faqs' },
]);
</script>

<style scoped></style>
