<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item"
                :class="{ active: index === breadcrumbs.length - 1 }">
                <router-link v-if="index !== breadcrumbs.length - 1" :to="crumb.path">{{ crumb.name }}</router-link>
                <span v-else>{{ crumb.name }}</span>
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() => {
    const matched = route.matched.filter((match) => match.name);
    return matched.map((match) => ({
        name: match.meta.breadcrumb || match.name,
        path: match.path,
    }));
});
</script>

<style scoped>
.breadcrumb {
    /* border: none !important; */
    box-shadow: 5px 5px 5px 1px #e0e0e0;
    background: #FFF;
    padding: 5px 10px;
    position: sticky;
    top: 0px;
}

.active {
    border: none !important;
    background-color: #FFF !important;
}
</style>