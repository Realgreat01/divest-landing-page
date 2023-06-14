<template>
  <div class="w-full text-white">
    <HeaderComponent />
    <MainLandingPage />
    <AboutPage />
    <KeyFeatures />
    <SupportCurrencies />
    <UseCases />
    <FAQs />
    <ContactUs />
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import MainLandingPage from "./components/MainLandingPage.vue";
import AboutPage from "./components/AboutPage.vue";
import KeyFeatures from "./components/KeyFeatures.vue";
import SupportCurrencies from "./components/SupportCurrencies.vue";
import UseCases from "./components/UseCases.vue";
import FAQs from "./components/FAQs.vue";
import ContactUs from "./components/ContactUs.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<style scoped></style>
