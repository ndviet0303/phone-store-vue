<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import { useRoute } from 'vue-router';
import { computed, provide } from 'vue';
import { useUser } from '@/composables/useUser';

const { user, setUser } = useUser();
provide('user', user);
provide('setUser', setUser);

const route = useRoute();

const currentRouteName = computed(() => route.name);
const hiddenFooterRoutes = [
  'sign-in',
  'sign-up',
  'profile',
  'product-histories',
  'product-history',
  'product-detail'
];

const isShowFooter = computed(() => !hiddenFooterRoutes.includes(currentRouteName.value));
</script>

<template>
  <Header />
  <RouterView />
  <div v-if="isShowFooter">
    <Footer />
  </div>
</template>
