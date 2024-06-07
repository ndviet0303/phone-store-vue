<template>
    <div class="side-bar">
        <ul class="side-bar-list">
            <li class="side-bar-item">
                <font-awesome-icon class="px-1 w-4" :icon="['fas', 'file-invoice']" />
                <span>Lịch sử mua hàng</span>
            </li>
            <li class="side-bar-item side-bar-active" @click="$router.push({ name: 'profile' })">
                <font-awesome-icon class="px-1 w-4" :icon="['far', 'user']" />
                <span>tài khoản của bạn</span>
            </li>
            <li class="side-bar-item">
                <font-awesome-icon class="px-1 w-4" :icon="['fas', 'right-from-bracket']" rotation=180 />
                <span>thoát tài khoản</span>
            </li>
        </ul>
    </div>
</template>