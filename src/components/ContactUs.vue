<template>
  <div class="relative mt-medium">
    <div class="grid h-[42rem] bg-brand p-medium md:grid-cols-2">
      <div class="">
        <h1 class="text-medium font-bold">Contact Us</h1>
        <p class="mb-0 md:max-w-[70%]">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es. sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id es
        </p>
      </div>
      <ContactUsIcon class="w-[32rem] md:w-[50rem]" />
    </div>
    <div class="bg-white py-medium text-dark md:h-[42rem]">
      <div
        class="left-1/2 top-1/2 flex w-full transform justify-center md:absolute md:mt-[10rem] md:-translate-x-1/2 md:-translate-y-1/2"
      >
        <VeeForm
          v-slot="{ handleSubmit, isSubmitting, errors }"
          class="w-4/5 rounded-thin border bg-white px-thin py-medium-lite md:w-1/2 md:px-[3.2rem] md:py-[4.8rem]"
        >
          <form
            @submit.prevent="handleSubmit($event, SEND_MESSAGE)"
            class="flex flex-col gap-thin"
          >
            <h1 class="text-small font-bold">Message</h1>
            <!-- name and email -->
            <div class="grid gap-thin md:grid-cols-2 md:gap-small">
              <div
                class=""
                v-for="({ label, ...attrs }, index) in detailsForm"
                :key="index"
              >
                <!-- <label class="block capitalize" for="subject">{{
                  label
                }}</label> -->
                <Field
                  class="block w-full rounded-lg border border-dark-50 bg-brand-50 py-4 pl-[1.6rem] text-normal-lite text-dark outline-none placeholder:capitalize placeholder:text-dark placeholder:text-opacity-50 focus:border-brand"
                  :name="label"
                  :placeholder="label"
                  v-bind="attrs"
                />
                <ErrorMessage
                  :name="label"
                  class="text-normal-lite text-error-400"
                />
              </div>
            </div>

            <!-- subject and messsage  -->
            <div
              class=""
              v-for="({ label, as, ...attrs }, index) in contactForm"
              :key="index"
            >
              <!-- <label class="block capitalize" for="subject">{{ label }}</label> -->
              <Field
                class="block w-full rounded-lg border border-dark-50 bg-brand-50 py-4 pl-[1.6rem] text-normal-lite text-dark outline-none placeholder:capitalize placeholder:text-dark placeholder:text-opacity-50 focus:border-brand"
                :name="label"
                :placeholder="label"
                :as="as"
                v-bind="attrs"
                :class="as === 'textarea' ? 'h-[10.6rem]' : ''"
              />
              <ErrorMessage
                :name="label"
                class="text-normal-lite text-error-500"
              />
            </div>
            <div
              class="mx-auto mt-thin flex h-[4.8rem] w-full items-center justify-center rounded-thin bg-brand font-bold text-white md:w-[30.6rem]"
            >
              <ButtonComponent
                type="submit"
                :loading="isSubmitting"
                :disabled="Object.keys(errors).length !== 0 || isSubmitting"
              >
                {{ isSubmitting ? 'Submitting' : 'Submit' }}
              </ButtonComponent>
            </div>
          </form>
        </VeeForm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactUsIcon from '@/icons/ContactUsIcon.vue';
import { ErrorMessage, Field, Form as VeeForm } from 'vee-validate';
import { ref } from 'vue';
import ButtonComponent from './resuables/ButtonComponent.vue';

// import axios from '@/axios';
import * as Yup from 'yup';

const SEND_MESSAGE = async (field: object) => {
  //   try {
  //     await axios.post('/home/contact', field);
  //     toast.SwiftToast('success', 'Message sent successfully');
  //   } catch (error) {
  //     toast.SwiftToast('error', 'Error sending message');
  //     console.log(error);
  //   }
};

const detailsForm = ref([
  {
    label: 'name',
    rules: Yup.string().required('Name is required'),
  },
  {
    label: 'email',
    rules: Yup.string()
      .required('Email is required')
      .email('Please enter a valid email'),
  },
]);
const contactForm = ref([
  {
    label: 'subject',
    rules: Yup.string()
      .required('Subject is required')
      .min(10, 'Subject is too short'),
  },
  {
    label: 'message',
    as: 'textarea',
    rules: Yup.string()
      .required('Message is required')
      .min(24, 'Message is too short'),
  },
]);
</script>

<style scoped></style>
