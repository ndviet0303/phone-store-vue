<template>
    <div class="container mx-auto p-5">

        <div class="login-form">
            <h1 class="text-lg font-bold capitalize items-center mx-auto">Đăng Ký với</h1>
            <div class="login-with">
                <button class="button-auth google">
                    <font-awesome-icon :icon="['fab', 'google']" />
                    <span>Google</span>
                </button>
                <button class="button-auth facebook">
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                    <span>Facebook</span>
                </button>
            </div>
            <div class="hr-text">
                <span class="px-5">hoặc</span>
            </div>
            <div v-if="errorMessage" class="error-message" v-html="errorMessage"></div>
            <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
            <form class="form-input" @submit.prevent="submitData">
                <div class="input-field">
                    <label v-if="isFocused.full_name" class="text-focus">Họ và tên(*)</label>
                    <input v-model="formData.full_name" required type="text" placeholder="Nhập họ và tên"
                        @focus="() => onFocus('full_name')" @blur="() => onBlur('full_name')">
                </div>
                <div class="input-field">
                    <label v-if="isFocused.email" class="text-focus">Email(*)</label>
                    <input v-model="formData.email" required type="email" placeholder="Nhập email"
                        @focus="() => onFocus('email')" @blur="() => onBlur('email')">
                </div>
                <div class="input-field">
                    <label v-if="isFocused.phone_number" class="text-focus">Số điện thoại(*)</label>
                    <input v-model="formData.phone_number" required type="text" placeholder="Nhập số điện thoại"
                        @focus="() => onFocus('phone_number')" @blur="() => onBlur('phone_number')">
                </div>
                <div class="input-field">
                    <label v-if="isFocused.password" class="text-focus">Mật khẩu(*)</label>
                    <input v-model="formData.password" required type="password" placeholder="Nhập mật khẩu"
                        @focus="() => onFocus('password')" @blur="() => onBlur('password')">
                </div>
                <div class="input-field">
                    <label v-if="isFocused.password_confirmation" class="text-focus">Nhập lại mật khẩu(*)</label>
                    <input v-model="formData.password_confirmation" required type="password"
                        placeholder="Nhập lại mật khẩu" @focus="() => onFocus('password_confirmation')"
                        @blur="() => onBlur('password_confirmation')">
                </div>
                <button type="submit" class="btn-login">Đăng ký</button>
            </form>
            <span class="flex justify-center">Bạn đã có tài khoản? <a class="text-red-500 font-bold" href="">Đăng nhập
                    ngay</a></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const errorMessage = ref('');
const successMessage = ref('');

const formData = ref({
    full_name: '',
    email: '',
    phone_number: '',
    password: '',
    password_confirmation: ''
});

const isFocused = ref({
    full_name: false,
    email: false,
    phone_number: false,
    password: false,
    password_confirmation: false
});

const submitData = async () => {
    try {
        successMessage.value = '';
        errorMessage.value = '';
        const response = await fetch(import.meta.env.VITE_APP_API_BASE_API + 'api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData.value)
        });
        const data = await response.json();
        if (data.status == 'Success') {
            successMessage.value = data.message + ' Redirecting...';
            setTimeout(() => {
                router.push({ name: 'sign-in' });
            }, 2000);
        } else if (data.status == 'error') {
            let errors = '';
            for (const key in data.errors) {
                errors += data.errors[key].join('<br>') + '<br>';
            }
            errorMessage.value = errors;
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

const onFocus = (field: string) => {
    isFocused.value[field] = true;
};

const onBlur = (field: string) => {
    isFocused.value[field] = false;
};
</script>

<style scoped>
/* Your styles here */
</style>