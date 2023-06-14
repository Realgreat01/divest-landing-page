<template>
  <div class="grid h-[40rem] grid-cols-[2fr,1.25fr,2fr] bg-dark p-medium">
    <div class="flex flex-col gap-small">
      <LogoWhite />
      <p class="max-w-[70%]">
        Divest simplifies the process of transferring funds. With just a few
        clicks, you can initiate a transaction and witness the power of instant
        conversion.
      </p>
      <div class="flex gap-small">
        <a
          :href="link.link"
          class="flex h-12 w-12 items-center justify-center rounded-full bg-brand"
          v-for="(link, index) in SocialMediaLinks"
          :key="index"
        >
          <component :is="link.icon" class="h-6 w-6" />
        </a>
      </div>
    </div>
    <div class="">
      <h2
        class="mb-small-lite mt-20 text-small font-semibold text-white md:mb-10 md:mt-0"
      >
        Quick Links
      </h2>
      <h2
        class="mb-small cursor-pointer text-[1.4rem] font-light"
        v-for="(link, index) in quickLinks"
        :key="index"
      >
        <a :href="link.route" class="">{{ link.title }}</a>
      </h2>
    </div>
    <div class="">
      <h2
        class="mb-small-lite mt-20 text-small font-semibold text-white md:mb-10 md:mt-0"
      >
        Contact Details
      </h2>
      <div
        class="mt-4 grid grid-cols-[10%,90%] items-center gap-x-6"
        v-for="(contact, index) in contactInformation"
        :key="index"
      >
        <div
          class="flex h-12 w-12 items-center justify-center rounded-full bg-white"
        >
          <component
            :is="contact.icon"
            class="h-6 w-6"
            :class="contact.class"
          />
        </div>
        <p class="cursor-pointer pr-3" @click="contact.action">
          {{ contact.contact }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoWhite from '@/icons/LogoWhite.vue';
import { ref, shallowRef } from 'vue';

import InstagramIcon from '@/icons/InstagramIcon.vue';
import LinkedinIcon from '@/icons/LinkedinIcon.vue';
import TwitterIcon from '@/icons/TwitterIcon.vue';

import LocationIcon from '@/icons/LocationIcon.vue';
import MailIcon from '@/icons/MailIcon.vue';

const SocialMediaLinks = shallowRef([
  { icon: TwitterIcon, link: '' },
  { icon: LinkedinIcon, link: '' },
  { icon: InstagramIcon, link: '' },
]);
const BusinessDetails = shallowRef([
  { icon: MailIcon, link: '' },
  { icon: LocationIcon, link: '' },
]);

const quickLinks = ref([
  { title: 'About', route: '#about' },
  { title: 'Key Features', route: '#key-features' },
  { title: 'Use Cases', route: '#use-cases' },
  { title: 'FAQs', route: '#faqs' },
]);

const contactInformation = ref([
  {
    icon: MailIcon,
    contact: 'info@divest.com',
    class: 'text-white',
    action: (): void => {
      window.location.href = 'mailto:' + 'info@divest.com';
    },
  },
  {
    icon: LocationIcon,
    contact: '32 Billionaire Street Lekki Phase II Lagos',
    class: 'fill-white',
    action: (): void => {
      window.location.href =
        'https://www.google.com/maps/search/' +
        encodeURIComponent('32 Billionaire Street Lekki Phase II Lagos');
    },
  },
]);
</script>

<style scoped></style>