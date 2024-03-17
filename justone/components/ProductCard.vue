<template>
    <div class="card text-center">
        <img :src="product.image" alt="production thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/games/${product.id}`">
            <p class="btn my-4">View Details</p>
        
        </NuxtLink>

    </div>
</template>

<script setup>
const { product } = defineProps(['product'])

</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70px;
    margin: 0 auto;
}

</style>