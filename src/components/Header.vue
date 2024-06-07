// src/components/Header.vue
<template>
    <header class="sticky top-0 bg-header">
        <div class="container mx-auto h-full px-5">
            <div class="flex header-main gap-5">
                <div class="header_logo" @click="$router.push({ name: 'home' })">
                    <img src="@/assets/logo.svg" alt="Vue logo" width="60px" />
                </div>
                <div class="btn-menu rounded-xl">
                    <div class="items-center header-text">
                        <font-awesome-icon :icon="['fas', 'bars']" />
                        <button>Danh Mục</button>
                    </div>
                </div>
                <div class="search-bar">
                    <button class="btn-search">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </button>
                    <input class="input-search" type="text" placeholder="M nhìn cái choá gì?">
                </div>
                <a class="btn btn-header" href="tel:0345694088">
                    <font-awesome-icon :icon="['fas', 'phone']" style="height: 20px;" />
                    <div class="flex flex-col">
                        <span>Gọi mua hàng</span>
                        <span>03456.94088</span>
                    </div>
                </a>
                <div class="btn btn-header">
                    <font-awesome-icon :icon="['fas', 'truck-fast']" style="height: 20px;" />
                    <div class="flex flex-col">
                        <span>Tra cứu</span>
                        <span>đơn hàng</span>
                    </div>
                </div>
                <div class="btn">
                    <font-awesome-icon :icon="['fas', 'cart-shopping']" style="height: 20px;" />
                    <div class="flex flex-col">
                        <span>Giỏ</span>
                        <span>hàng</span>
                    </div>
                </div>
                <div v-if="!user" class="btn-auth" @click="$router.push({ name: 'sign-in' })">
                    <font-awesome-icon :icon="['fas', 'user']" />
                    <span>Đăng nhập</span>
                </div>
                <div v-else class="btn-auth" @click="$router.push({ name: 'profile' })">
                    <font-awesome-icon :icon="['fas', 'user']" />
                    <span>{{ user?.full_name }}</span>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, inject, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import type { Ref } from 'vue';
import type { User } from '@/composables/useUser';

const router = useRouter();
const token = ref<string>('');
const userData = ref<any>(null);
token.value = localStorage.getItem('token') ?? '';
const user = inject<Ref<User | null>>('user');
const setUser = inject<(newUser: User) => void>('setUser');

const getUser = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_APP_API_BASE_API + 'api/user', {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });
        return response.data;
    } catch (error) {
        return null;
    }
};
onMounted(async () => {
    if (setUser) {
        userData.value = await getUser();
        if (userData.value) {
            setUser({
                id: userData.value.id,
                full_name: userData.value.full_name,
                email: userData.value.email,
                phone_number: userData.value.phone_number,
                role: userData.value.role,
            });
        } else {
            router.push({ name: 'sign-in' });
        }
    }
});
</script>
