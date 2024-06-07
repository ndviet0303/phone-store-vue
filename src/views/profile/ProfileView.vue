<template>
    <div class="container mx-auto p-5">
        <div class="container-items">
            <SideBarPF />
            <form class="info-page" @submit.prevent="submitData">
                <div v-if="errorMessage" class="error-message" v-html="errorMessage"></div>
                <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
                <div class="info-page-group">
                    <div class="info-page-text">
                        <label class="info-page-title" id="name" hidden>Họ và tên: </label>
                        <input v-model="formData.full_name" id="nameInput" class="info-page-item" type="text"
                            :placeholder="'Họ và tên: ' + user?.full_name" disabled @blur="hidden('name')">
                    </div>
                    <button type="button" @click="show('name')">
                        <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                    </button>
                </div>
                <div class="info-page-group">
                    <div class="info-page-text">
                        <label class="info-page-title" hidden id="email">Email: </label>
                        <input v-model="formData.email" class="info-page-item" type="text" id="emailInput" disabled
                            :placeholder="'Email: ' + user?.email" @blur="hidden('email')">
                    </div>
                    <button type="button" @click="show('email')">
                        <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                    </button>
                </div>
                <div class="info-page-group">
                    <div class="info-page-text">
                        <label class="info-page-title" hidden id="phone">Số điện thoại: </label>
                        <input v-model="formData.phone_number" class="info-page-item" type="text" disabled
                            id="phoneInput" :placeholder="'Số điện thoại: ' + user?.phone_number"
                            @blur="hidden('phone')">
                    </div>
                    <button @click="show('phone')" type="button">
                        <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                    </button>
                </div>
                <button type="submit" class="btn-update">cập nhật thông tin</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted } from 'vue';
import type { Ref } from 'vue';
import type { User } from '@/composables/useUser';
import SideBarPF from '@/components/SideBarPF.vue';
import axios from 'axios';
const user = inject<Ref<User | null>>('user');
const token = ref<string>('');
token.value = localStorage.getItem('token') ?? '';
const errorMessage = ref('');
const successMessage = ref('');

const formData = ref({
    full_name: '',
    email: '',
    phone_number: ''
});

const submitData = async () => {
    try {
        const response = await axios.post(import.meta.env.VITE_APP_API_BASE_API + 'api/user/update', {
            full_name: formData.value.full_name,
            email: formData.value.email,
            phone_number: formData.value.phone_number
        }, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });
        if (response.data.status == 0) {
            successMessage.value = response.data.message;
        }
        else {
            errorMessage.value = response.data.message;

        }
    }
    catch (e) {
        console.log('Bug submitData Update Profile:' + e);
    }
}

const show = (id: string) => {
    const element = document.getElementById(id);
    const elementInput = document.getElementById(`${id}Input`);
    if (element) {
        element.hidden = false;
        element.classList.add('info-page-active');
        elementInput.disabled = false;
        elementInput.classList.add('info-input-page-active');
        elementInput.focus();
    }
}

const hidden = (id: string) => {
    const element = document.getElementById(id);
    const elementInput = document.getElementById(`${id}Input`);
    if (element) {
        if (!elementInput.value) {
            element.hidden = true;

        }
        element.classList.remove('info-page-active');
        elementInput.classList.remove('info-input-page-active');
        elementInput.disabled = true;
    }
}
</script>