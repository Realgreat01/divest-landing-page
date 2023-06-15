<template>
  <div
    class="faqs h-fit w-full bg-white pt-small-lite text-dark md:min-h-[97rem] md:pt-[10.1rem]"
    id="faqs"
  >
    <div class="mx-auto md:w-[51.1rem]">
      <h2 class="text-center text-small font-bold text-dark md:text-[3.6rem]">
        FAQs
      </h2>
      <p class="mx-[6rem] mb-[4.8rem] mt-4 text-center">
        Here are some frequently asked questions
      </p>
    </div>
    <div class="rounded-xl p-thin md:mx-[18.9rem] md:p-[4.8rem]">
      <details
        class="mt-small flex flex-col justify-between overflow-hidden rounded-thin bg-white bg-none"
        v-for="(faq, index) in Faqs"
        :key="index"
      >
        <summary
          class="grid w-full cursor-pointer grid-cols-[90%,5%] items-start justify-between gap-x-10 rounded-[5rem] bg-white p-medium-lite py-[1.2rem] shadow-sm shadow-brand-50 md:px-[5rem]"
        >
          <span class="block">{{ faq.question }}</span>
          <PlusIcon
            class="summary-icon-plus block h-6 w-6 justify-self-end duration-200"
          />
          <MinusIcon
            class="summary-icon-minus block h-6 w-6 justify-self-end duration-200"
          />
        </summary>
        <div
          class="mb-4 w-full rounded-b-[2rem] p-8 px-[5rem] py-[1.2rem] text-[1.4rem] duration-700"
        >
          {{ faq.answer }}
        </div>
      </details>
    </div>
  </div>
</template>

<script setup lang="ts">
import MinusIcon from '@/icons/MinusIcon.vue';
import PlusIcon from '@/icons/PlusIcon.vue';
import { ref } from 'vue';
const Faqs = ref([
  {
    question: 'What is Divest ?',
    answer: `Divest is a financial services company that offers businesses and individuals 
    access to global banking services, including virtual accounts in multiple currencies,
     global transfer services, and forex services`,
  },
  {
    question: ' What currencies does Divest support ?',
    answer: `Divest offers virtual accounts in GBP, USD, NGN, and EUR, 
      and supports global transfers in over 50 currencies.`,
  },
  {
    question: 'How long does it take to transfer money with Divest ?',
    answer: `Transfers with Divest are typically completed within 1-3 business days, depending on the destination and currency.`,
  },
  {
    question: ' How secure is Divest ?',
    answer: `Divest prioritizes security and reliability, using cutting-edge 
    technology and partnering with reputable financial institutions to ensure
     customer data and transactions are protected.`,
  },
  {
    question: 'What are the fees for using Divest ?',
    answer: `Divest offers competitive exchange rates and zero transfer fees for global transfers. Fees for virtual accounts and other services are available on our website and may vary by currency and service.`,
  },
  {
    question: 'What kind of customer support does Divest offer ?',
    answer: `Divest offers dedicated customer support via email, phone, and chat, available during business hours. Our support team is ready to assist with any questions or concerns.`,
  },
  {
    question: 'Can Divest be used to transfer money to suppliers overseas ?',
    answer: ` Divest can be used to transfer money to suppliers overseas. Divest offers global cross currency transfer and forex transfer services, allowing businesses to send payments to suppliers and partners around the world.`,
  },
]);
</script>

<style scoped lang="scss">
.faqs {
  background-image: url('../assets/faq-background.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
}
details[open] {
  @apply overflow-hidden rounded-[2rem];
  summary {
    @apply rounded-none font-bold text-brand;
  }
  .summary-icon-plus {
    @apply hidden;
  }
  .summary-icon-minus {
    @apply block;
  }
}

details {
  box-shadow: 0px 16px 22px rgba(0, 0, 0, 0.05);
  .summary-icon-plus {
    @apply block;
  }
  .summary-icon-minus {
    @apply hidden;
  }
}
</style>
