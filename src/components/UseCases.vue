<template>
  <div
    class="bg-[#F2FAFA] p-small-lite py-medium pt-[9.6rem] text-dark md:p-medium"
    id="use-cases"
  >
    <div class="md:mx-auto md:w-3/5 md:text-center">
      <h2 class="text-small font-bold">Use Cases</h2>
      <p class="my-thin w-full">
        At Divest, we believe that financial empowerment should be accessible to
        both individuals and businesses alike. That's why our platform is
        designed to cater to the unique needs of every user, providing seamless
        instant crypto-to-cash conversion for all.
      </p>
    </div>

    <div
      class="mx-auto my-medium-lite flex w-full justify-between gap-small-lite rounded-thin bg-white p-thin md:w-fit"
    >
      <div
        class="w-full rounded-thin px-normal-lite py-[1.2rem] duration-1000 md:w-[19rem] md:px-medium-lite"
        :class="
          index === currentIndex ? 'bg-brand text-white' : 'bg-white text-dark'
        "
        @click="currentIndex = index"
        v-for="(button, index) in buttons"
        :key="index"
      >
        <ButtonComponent class="">{{ button }}</ButtonComponent>
      </div>
    </div>

    <div
      class="mx-auto grid items-center gap-small duration-1000 md:w-4/5 md:grid-cols-2 md:gap-0"
    >
      <img :src="activeUsecase.image" alt="" class="block" />
      <div class="flex flex-col gap-medium-lite">
        <div
          v-for="(usecase, index) in activeUsecase.usecases"
          :key="index"
          class=""
        >
          <h2 class="text-small-lite font-bold text-brand-900">
            {{ usecase.title }}
          </h2>
          <h2 class="">{{ usecase.content }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ButtonComponent from './resuables/ButtonComponent.vue';
const currentIndex = ref(0);
const buttons = ref(['For Individuals', 'For Company']);
const UseCases = ref([
  {
    image: 'individual-use-case.png',
    usecases: [
      {
        title: 'Unlock the Value of Your Cryptocurrencies',
        content:
          "Whether you're a crypto enthusiast, an investor, or simply someone who holds cryptocurrencies, Divest empowers you to effortlessly convert your digital assets into cash. Instantly access the value of your crypto holdings and use the funds for personal expenses, investments, or supporting loved ones in supported African countries.",
      },
      {
        title: 'Effortless Remittances',
        content:
          'Divest serves as your go-to platform for global remittances. Send money to family members, friends, or anyone in supported African countries with just a few clicks.',
      },
    ],
  },
  {
    image: 'company-use-case.png',
    usecases: [
      {
        title: 'Seamless Cash Flow Management',
        content:
          "Divest understands the importance of maintaining a smooth cash flow for businesses. Instantly convert your crypto assets into cash to meet operational expenses, pay suppliers, or fund new ventures. Our platform provides a streamlined solution to ensure that your business remains agile and adaptable in today's fast-paced financial landscape.",
      },
      {
        title: 'Enhanced Cross-Border Transactions',
        content:
          'Expand your business horizons with Divest. Seamlessly remit funds to business partners, suppliers, or remote teams in supported African countries. By utilizing our instant crypto-to-cash conversion, you can ensure efficient and timely payments, fostering stronger business relationships and unlocking new growth opportunities.',
      },
    ],
  },
]);
const activeUsecase = computed(() => UseCases.value[currentIndex.value]);
</script>

<style scoped></style>
