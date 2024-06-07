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
const isShowFooter = computed(() => currentRouteName.value !== 'sign-in' && currentRouteName.value !== 'sign-up' && currentRouteName.value !== 'profile');
</script>

<template>
  <Header />
  <RouterView />
  <div v-if="isShowFooter">
    <Footer />
  </div>
</template>
