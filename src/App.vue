<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const currentRouteName = computed(() => route.name);
const isShowFooter = computed(() => currentRouteName.value !== 'sign-in' && currentRouteName.value !== 'sign-up');
</script>

<template>
  <Header />
  <RouterView />
  <div v-if="isShowFooter">
    <Footer />
  </div>
</template>
