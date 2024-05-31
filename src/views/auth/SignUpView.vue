<template>
    <div class="container mx-auto p-5">
        <div class="login-form">
            <h1 class="text-lg font-bold capitalize items-center mx-auto">Đăng Ký với</h1>
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
                <div class="input-field" v-for="(field, index) in fields" :key="index">
                    <label v-if="field.isFocused" class="text-focus">{{ field.label }}</label>
                    <input :required="field.required" :type="field.type" :placeholder="field.placeholder"
                        @focus="() => onFocus(index)" @blur="() => onBlur(index)">
                </div>
            </div>
            <!-- <a class="forgot-password" href="">Quên mật khẩu?</a> -->
            <button class="btn-login">Đăng ký</button>
            <span class="flex justify-center">Bạn đã có tài khoản? <a class="text-red-500 font-bold" href="">Đăng
                    nhập
                    ngay</a></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fields = ref([
    { label: 'Họ và tên(*)', placeholder: 'Nhập họ và tên', type: 'text', isFocused: false, required: true },
    { label: 'Email(*)', placeholder: 'Nhập email', type: 'email', isFocused: false, required: true },
    { label: 'Số điện thoại(*)', placeholder: 'Nhập số điện thoại', type: 'text', isFocused: false, required: true },
    { label: 'Mật khẩu(*)', placeholder: 'Nhập mật khẩu', type: 'password', isFocused: false, required: true },
    { label: 'Nhập lại mật khẩu(*)', placeholder: 'Nhập lại mật khẩu', type: 'password', isFocused: false, required: true },
]);

const onFocus = (index: number) => {
    fields.value[index].isFocused = true;
}
const onBlur = (index: number) => {
    fields.value[index].isFocused = false;
};

</script>