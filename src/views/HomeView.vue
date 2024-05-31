<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const loadImg = (imageName: string) => {
  return new URL(`../assets/img/${imageName}`, import.meta.url).href;
};

const slides = ref([
  { src: loadImg('slide_1.png'), alt: 'Image 1', text: "Mua ngay" },
  { src: loadImg('slide_2.png'), alt: 'Image 2', text: "Súc vật" },
  { src: loadImg('slide_3.png'), alt: 'Image 3', text: "đầu buồi" }
]);
const currentIndex = ref(0);
let interval: number | undefined;

const startSlideshow = () => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  }, 5000);
};

const setSlide = (index: number) => {
  currentIndex.value = index;
  clearInterval(interval);
  startSlideshow();
};
onMounted(() => {
  startSlideshow();
});
onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="container mx-auto p-5">
    <div class="home-top">
      <ul class="main-menu disable-mobile">
        <li class="menu-items">
          <span>
            Điện Thoại
          </span>
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </li>
        <li class="menu-items">
          <span>
            Laptop
          </span>
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </li>
        <li class="menu-items">
          <span>
            Linh Kiện PC
          </span>
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </li>
        <li class="menu-items">
          <span>
            Màn Hình
          </span>
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </li>
        <li class="menu-items">
          <span>
            SSD
          </span>
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </li>
        <li class="menu-items">
          <span>
            HDD
          </span>
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </li>
        <li class="menu-items">
          <span>
            USB
          </span>
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </li>
        <li class="menu-items">
          <span>
            Phụ Kiện
          </span>
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </li>

      </ul>
      <div class="slideshow-container">
        <div class="slide fade" v-for="(slide, index) in slides" :key="index" v-show="currentIndex === index">
          <img :src="slide.src" :alt="slide.alt">
        </div>
        <div class="dots-container">
          <div class="dot" v-for="(slide, index) in slides" :key="index" :class="{ active: currentIndex === index }"
            @click="setSlide(index)">
            <span>
              {{ slide.text }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="home-mid mt-5">
      <div class="header-title">
        <div class="title-main">
          <a href="">Điện Thoại</a>
        </div>
        <div class="title-body">
          <a class="title-items" href="">Apple</a>
          <a class="title-items" href="">Xem Tất Cả</a>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <img
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png"
            alt="">
          <span class="title-card">iporn 15 pro mec</span>
          <div class="price">
            <span class="sale-price">9.000₫</span>
            <span class="original-price">10.000₫</span>
          </div>
          <div class="stars text-amber-400">
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
