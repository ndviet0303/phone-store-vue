<template>
    <div class="container mx-auto p-5">
        <div class="container-items">
            <SideBarPF />
            <div class="product-container">
                <div class="product-view info-page">
                    <div class="product-total">
                        <div class="product-total-items border-r border-black">
                            <h1 class="font-bold text-4xl">2</h1>
                            <h3 class="capitalize">đơn hàng</h3>
                        </div>

                        <div class="product-total-items">
                            <h1 class="font-bold text-4xl">2B</h1>
                            <h3 class="capitalize">Tổng tiền tích luỹ</h3>
                        </div>
                    </div>
                </div>
                <div class="btn-list-status">
                    <button class="btn-status btn-active">Tất cả</button>
                    <button class="btn-status">Đang chờ xác nhận</button>
                    <button class="btn-status">Đang giao</button>
                    <button class="btn-status">Đã giao</button>
                    <button class="btn-status">Đã hủy</button>
                </div>
                <div class="product-list">
                    <div class="info-page product-card">
                        <div>image</div>
                        <div>title</div>
                        <div>price</div>
                        <div>status</div>
                        <div>time</div>
                        <button>xem chi tiết</button>
                    </div>

                    <div class="info-page product-card">
                        <div>image</div>
                        <div>title</div>
                        <div>price</div>
                        <div>status</div>
                        <div>time</div>
                        <button>xem chi tiết</button>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script setup lang="ts">
import SideBarPF from '@/components/SideBarPF.vue';

</script>