<template>
    <Breadcrumbs />
    <div class="container p-5">
        <h1 class="text-lg font-bold">Samsung Galaxy M34 5G 8GB 128GB</h1>
        <hr>
        <div class="product-detail">
            <div>
                <div class="product-left">
                    <swiper ref="swiperRef" :slides-per-view="1" pagination @swiper="onSwiper">
                        <swiper-slide v-for="(image, index) in images" :key="index">
                            <img :src="image.src" :alt="image.alt" />
                            <div v-if="index === 0" class="slide-text">tính năng nổi bật</div>
                        </swiper-slide>

                    </swiper>
                    <div class="thumbnails">
                        <div v-for="(image, index) in images">
                            <div v-if="index === 0" class="slide-icon" @click="slideTo(index)">
                                <font-awesome-icon :icon="['far', 'star']" />
                                <span class="slide-text-icon">
                                    tính năng nổi bật
                                </span>
                            </div>
                            <img v-else :key="index" :src="image.src" :alt="image.alt" @click="slideTo(index)" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-right">
                <h1 class="text-lg font-bold">Laptop Lenovo V14 G3 IAP 82TS005YVN (i5-1235U, Iris Xe Graphics, Ram 8GB
                    DDR4, SSD 512GB, 14 Inch IPS FHD/Win11*)</h1>
                <div class="price">
                    <div class="box-price box-selected">
                        <span class="box-config">16GB - 512GB</span>
                        <span class="box-price-product">500.000₫</span>
                    </div>
                    <div class="box-price">
                        <span class="box-config">32GB - 1TB</span>
                        <span class="box-price-product">500.000.000₫</span>
                    </div>
                </div>
                <div class="flex quantity-field">
                    <span class="text-quantity">Số lượng: </span>
                    <div class="input-quantity">
                        <button class="quantity-control">
                            <font-awesome-icon :icon="['fas', 'minus']" />
                        </button>
                        <input class="input-field-quantity" type="number" value="1">
                        <button class="quantity-control">
                            <font-awesome-icon :icon="['fas', 'plus']" />
                        </button>
                    </div>
                </div>
                <div class="btn-payment">
                    <button class="btn-buy">mua ngay</button>
                    <button class="btn-add-to-cart">
                        <font-awesome-icon :icon="['fas', 'cart-plus']" />
                        <span class="text-cart">Thêm vào giỏ</span>
                    </button>
                </div>
                <div class="info-product">
                    <h1 class="header-product">Thông tin sản phẩm</h1>
                    <ul class="product-information">
                        <font-awesome-icon class="w-5" :icon="['fas', 'mobile-screen-button']" />
                        <span>Mới, đầy đủ phụ kiện từ nhà sản xuất</span>
                    </ul>
                    <div>
                        <font-awesome-icon class="w-5" :icon="['fas', 'box-open']" />
                        <span>Máy lọc không khí thông minh x 1</span>
                    </div>
                    <div>
                        <font-awesome-icon class="w-5" :icon="['fas', 'shield-heart']" />
                        <span>Bảo hành chính hãng 12 tháng</span>
                    </div>
                    <div>
                        <font-awesome-icon class="w-5" :icon="['fas', 'check']" />
                        <span>Giá sản phẩm đã bao gồm VAT</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-description">
            <div class="product-feature">
                <h1>đặc điểm nổi bật</h1>
                <span>laptop ghẻ</span>
            </div>
            <div class="product-specs">
                <h1>Thông số kĩ thuật</h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import 'swiper/swiper-bundle.css';

const images = ref([
    { src: 'https://bizweb.dktcdn.net/100/329/122/products/laptop-lenovo-v14-g3-iap-82ts005yvn.jpg?v=1704298030690', alt: 'Image 1' },
    { src: 'https://bizweb.dktcdn.net/100/329/122/products/laptop-lenovo-v14-g3-iap-82ts005yvn.jpg?v=1704298030690', alt: 'Image 2' },
    { src: 'https://bizweb.dktcdn.net/100/329/122/products/laptop-lenovo-v14-g3-iap-82ts005yvn.jpg?v=1704298030690', alt: 'Image 3' },
    // Add more images here
]);

const swiperRef = ref(null);

const onSwiper = (swiper) => {
    swiperRef.value = swiper;
};

const slideTo = (index) => {
    if (swiperRef.value) {
        swiperRef.value.slideTo(index);
    }
};

onMounted(() => {
    // if (swiperRef.value) {
    //     console.log('Swiper instance:', swiperRef.value); // Kiểm tra instance của Swiper
    // }
});
</script>

<style scoped>
/* .custom-button-next {
    color: #fff;
    background-color: #575656;
    padding: 10px;
    border-radius: 5px;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
} */

.slide-content {
    position: relative;
}

.swiper {
    max-width: 400px;
}

.thumbnails img {
    width: 50px;
    height: 50px;
    margin: 0 5px;
    cursor: pointer;
    border: 1px solid #ccc;
}

.thumbnails {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.thumbnails img:hover {
    border: 2px solid #007bff;
}
</style>