<template>
  <div class="w-full text-white">
    <HeaderComponent class="hidden md:flex" />
    <MobileSidebar class="flex md:hidden" />
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
import AboutPage from './components/AboutPage.vue';
import ContactUs from './components/ContactUs.vue';
import FAQs from './components/FAQs.vue';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import KeyFeatures from './components/KeyFeatures.vue';
import MainLandingPage from './components/MainLandingPage.vue';
import MobileSidebar from './components/MobileSidebar.vue';
import SupportCurrencies from './components/SupportCurrencies.vue';
import UseCases from './components/UseCases.vue';
</script>

<style scoped></style>
