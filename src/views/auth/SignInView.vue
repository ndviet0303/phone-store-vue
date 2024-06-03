<template>
    <div class="container mx-auto p-5">
        <div class="login-form">
            <h1 class="text-lg font-bold capitalize items-center mx-auto">Đăng nhập với</h1>
            <div class="login-with">
                <button class="button-auth google">
                    <font-awesome-icon :icon="['fab', 'google']" />
                    <span>
                        Google
                    </span>
                </button>
                <button class="button-auth facebook">
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                    <span>
                        Facebook
                    </span>
                </button>
            </div>
            <div class="hr-text">
                <span class="px-5">hoặc</span>
            </div>
            <div class="form-input">
                <div class="input-field">
                    <label v-if="isShow" class="text-focus">số điện thoại/email</label>
                    <input @focus="onFocus" @blur="onBlur" type="text" placeholder="Nhập số điện thoại/email">
                </div>
                <div class="input-field">
                    <label v-if="isShowPassword" class="text-focus">mật khẩu</label>
                    <input @focus="onFocusPassword" @blur="onBlurPassword" type="password" placeholder="Nhập mật khẩu">
                </div>
            </div>
            <a class="forgot-password" href="">Quên mật khẩu?</a>
            <button class="btn-login">Đăng nhập</button>
            <span class="flex justify-center">Bạn chưa có tài khoản? <a @click="$router.push({ name: 'sign-up' })"
                    class="text-red-500 font-bold" href="">Đăng
                    ký
                    ngay</a></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isShow = ref(false)
const isShowPassword = ref(false)
const onFocus = () => {
    isShow.value = true;
}
const onBlur = () => {
    isShow.value = false;
}
const onFocusPassword = () => {
    isShowPassword.value = true;
}
const onBlurPassword = () => {
    isShowPassword.value = false;
}

</script>