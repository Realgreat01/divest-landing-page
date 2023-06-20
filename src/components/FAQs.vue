<template>
  <div class="faqs h-fit w-full bg-white pt-[9.6rem] text-dark" id="faqs">
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
        ref="summaries"
        @click="closeOpenedDetails"
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
    question: 'What cryptocurrencies do you support ?',
    answer:
      'We support a wide range of cryptocurrencies, including Bitcoin and UDST',
  },
  {
    question: 'What countries do you support for cashouts ?',
    answer:
      'We support cashouts to bank accounts and mobile wallet in a number of countries including Nigeria, Ghana, South Africa, Kenya and Rwanda',
  },
  {
    question: 'How long does it take to convert crypto to cash ?',
    answer:
      'Our platform can convert your crypto to cash in 100 seconds or less.',
  },
  {
    question: 'Do you hold assets during the conversion process ?',
    answer:
      "No, we don't hold your assets. We directly convert your crypto into your chosen bank account.",
  },
  {
    question: 'Are your fees transparent ?',
    answer:
      'Yes, our pricing model is simple and transparent, with no hidden fees or charges.',
  },
  {
    question: 'Is your platform compliant with regulations ?',
    answer:
      'Yes, our platform is fully compliant with all relevant regulations, giving you peace of mind when using our service.',
  },
]);

const summaries = ref<HTMLDetailsElement[] | null[]>([]);
function closeOpenedDetails(event: Event) {
  summaries.value.forEach((summary) => {
    if (!summary) return;

    if (summary !== event.currentTarget) {
      summary.removeAttribute('open');
    }
  });
}
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
  summary::marker {
    display: none;
  }
  .summary-icon-plus {
    @apply block;
  }
  .summary-icon-minus {
    @apply hidden;
  }
}
</style>
