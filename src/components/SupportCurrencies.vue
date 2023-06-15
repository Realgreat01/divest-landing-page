<template>
  <div class="bg-brand-900 pt-medium">
    <div class="bg-[#09231A] p-medium">
      <h2 class="text-center text-small font-bold">Supported Currencies</h2>
      <div
        class="mx-auto my-small flex w-fit items-center justify-center gap-x-small md:gap-x-[8rem]"
      >
        <div
          class="flex cursor-pointer flex-col items-center justify-center"
          v-for="(country, index) in SupportedCountries"
          :key="index"
        >
          <img
            :src="`https://flagcdn.com/w640/${country.code}.png`"
            class="block h-medium-lite w-medium-lite rounded-full md:h-medium md:w-medium"
          />
          <h1 class="">{{ country.currency }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const SupportedCountries = ref([
  { currency: 'NGN', code: 'ng' },
  { currency: 'GHC', code: 'gh' },
  { currency: 'RWF', code: 'rw' },
  { currency: 'KES', code: 'ke' },
  { currency: 'ZAR', code: 'za' },
]);
</script>

<style lang="scss" scoped></style>
