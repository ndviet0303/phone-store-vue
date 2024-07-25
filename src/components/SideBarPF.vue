<template>
    <div class="side-bar">
        <ul class="side-bar-list">
            <li class="side-bar-item" :class="route.name == 'product-histories' ? 'side-bar-active' : ''"
                @click="$router.push({ name: 'product-histories' })">
                <font-awesome-icon class="px-1 w-4" :icon="['fas', 'file-invoice']" />
                <span>Lịch sử mua hàng</span>
            </li>
            <li id="profile" class="side-bar-item" :class="route.name == 'profile' ? 'side-bar-active' : ''"
                @click="$router.push({ name: 'profile' })">
                <font-awesome-icon class="px-1 w-4" :icon="['far', 'user']" />
                <span>tài khoản của bạn</span>
            </li>
            <li class="side-bar-item" @click="logOut">
                <font-awesome-icon class="px-1 w-4" :icon="['fas', 'right-from-bracket']" rotation=180 />
                <span>thoát tài khoản</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { ref, inject, onMounted } from 'vue';
import axios from 'axios';
import type { Ref } from 'vue';
import type { User } from '@/composables/useUser';
import { useRouter } from 'vue-router';

const $router = useRouter();

const route = useRoute();
const token = ref<string>('');
// token.value = localStorage.getItem('token') ?? '';
const user = inject<Ref<User | null>>('user');
const setUser = inject<(newUser: User) => void>('setUser');

const logOut = async () => {
    localStorage.removeItem('user');
    setUser(null);
    $router.push({ name: 'sign-in' });
    await axios.get(import.meta.env.VITE_APP_API_BASE_API + 'user/api/sign-out', {
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });
}

</script>