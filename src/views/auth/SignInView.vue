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
            <div v-if="errorMessage" class="error-message" v-html="errorMessage"></div>
            <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
            <form class="form-input" @submit.prevent="submitData">
                <div class="input-field">
                    <label v-if="isShow" class="text-focus">số điện thoại/email</label>
                    <input v-model="formData.identifier" @focus="onFocus" @blur="onBlur" type="text"
                        placeholder="Nhập số điện thoại/email">
                </div>
                <div class="input-field">
                    <label v-if="isShowPassword" class="text-focus">mật khẩu</label>
                    <input v-model="formData.password" @focus="onFocusPassword" @blur="onBlurPassword" type="password"
                        placeholder="Nhập mật khẩu">
                </div>
                <a class="forgot-password" href="">Quên mật khẩu?</a>
                <button type="submit" class="btn-login">Đăng nhập</button>
            </form>
            <span class="flex justify-center">Bạn chưa có tài khoản? <a @click="$router.push({ name: 'sign-up' })"
                    class="text-red-500 font-bold" href="">Đăng
                    ký
                    ngay</a></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isShow = ref(false)
const isShowPassword = ref(false)
const errorMessage = ref('');
const successMessage = ref('');


const formData = ref({
    identifier: '',
    password: ''
})
const submitData = async () => {
    try {
        const response = await axios.post(import.meta.env.VITE_APP_API_BASE_API + 'api/login', {
            identifier: formData.value.identifier,
            password: formData.value.password
        });
        const data = response.data;
        if (data.status == 'success') {
            localStorage.setItem('token', data.token)
            successMessage.value = "Đăng nhập thành công! Đang Chuyển Hướng Về Trang Chủ";
            setTimeout(() => {
                router.push({ name: 'home' }).then(() => {
                    window.location.reload();
                });
            }, 2000);

        }
    }
    catch (e) {
        if (e.response.data.status == "error") {
            errorMessage.value = e.response.data.message;
        }
    }
}
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