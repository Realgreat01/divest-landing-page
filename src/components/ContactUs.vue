<template>
  <div class="relative pt-[9rem]" id="contact-us">
    <div
      class="relative grid h-[42rem] bg-brand p-small md:grid-cols-2 md:p-medium"
    >
      <div class="">
        <h1 class="mb-normal-lite text-medium-lite font-bold md:text-medium">
          Contact Us
        </h1>
        <p class="mb-0 md:max-w-[70%]">
          We value your feedback and inquiries. Feel free to reach out to us
          with any questions, concerns, or suggestions you may have regarding
          our services. Your input is important to us as we continuously strive
          to improve and provide you with the best experience possible.
        </p>
      </div>
      <ContactUsIcon
        class="absolute top-[45%] w-[32rem] md:relative md:w-[50rem]"
      />
    </div>
    <div class="bg-white py-medium text-dark md:h-[42rem]">
      <div
        class="left-1/2 top-1/2 flex w-full transform justify-center md:absolute md:mt-[10rem] md:-translate-x-1/2 md:-translate-y-1/2"
      >
        <VeeForm
          v-slot="{ handleSubmit, isSubmitting, errors }"
          class="w-[90%] rounded-thin border bg-white px-thin py-medium-lite md:w-1/2 md:px-[3.2rem] md:py-[4.8rem]"
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
import axios from '@/axios';
import ContactUsIcon from '@/icons/ContactUsIcon.vue';
import { ErrorMessage, Field, Form as VeeForm } from 'vee-validate';
import { ref } from 'vue';
import Message from 'vue-m-message';
import * as Yup from 'yup';
import ButtonComponent from './resuables/ButtonComponent.vue';

const SEND_MESSAGE = async (field: object) => {
  try {
    console.log(field);
    await axios.post('/settings/contact-us', field);
    Message.success('Feedback sent successfully');
  } catch (error) {
    Message.error('Error sending message');
    console.log(error);
  }
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
      .min(24, 'Message is too short, Kindly enter at least 20 characters!'),
  },
]);
</script>

<style scoped></style>
