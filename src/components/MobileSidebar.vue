<template>
  <div class="sticky top-0 z-[100] h-fit w-full bg-[#0D1912]">
    <div
      v-if="!showModal"
      class="z-50 flex h-[9.6rem] w-full items-center justify-between overflow-hidden px-thin py-small duration-[1500ms]"
    >
      <LogoPlain class="w-[12rem]" />
      <MenuIcon @click="showModal = !showModal" />
    </div>

    <div
      class="fixed top-0 z-[100] flex h-screen w-full justify-end overflow-hidden bg-[#0D1912] p-medium px-small"
      v-else
    >
      <div class="w-full overflow-x-hidden duration-500">
        <div
          class="mb-[4rem] flex h-[9.6rem] w-full items-center justify-between"
        >
          <LogoPlain class="w-[12rem]" />
          <CancelIcon class="w-10 duration-500" @click="showModal = false" />
        </div>
        <div class="my-medium flex flex-col gap-y-small-lite text-small">
          <a
            @click="showModal = false"
            class="hover:font-bold hover:text-brand"
            v-for="(route, index) in NavActions"
            :href="route.route"
            :key="index"
          >
            {{ route.title }}
          </a>
        </div>
        <AppDownload />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CancelIcon from '@/icons/CancelIcon.vue';
import LogoPlain from '@/icons/LogoWhite.vue';
import MenuIcon from '@/icons/MenuIcon.vue';
import { ref, watchEffect } from 'vue';
import AppDownload from './resuables/AppDownload.vue';

const showModal = ref(false);
const NavActions = ref([
  { title: 'About', route: '#about' },
  { title: 'Key Features', route: '#key-features' },
  { title: 'Use Cases', route: '#use-cases' },
  { title: 'FAQs', route: '#faqs' },
]);

watchEffect(() => {
  if (showModal.value === true) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'auto';
});
</script>

<style scoped lang="scss"></style>
