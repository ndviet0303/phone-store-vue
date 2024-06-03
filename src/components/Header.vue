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
                <div class="btn-auth" @click="$router.push({ name: 'sign-in' })">
                    <font-awesome-icon :icon="['fas', 'user']" />
                    <span>Đăng nhập</span>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
    console.log("test");
    router.push({ name: 'sign-in' });
};
</script>