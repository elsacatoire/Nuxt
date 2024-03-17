<template>
    <div>
        <h2>Let's play</h2>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>

    </div>
</template>

<script setup>
definePageMeta({
    layout: 'games'
})

// fetch the products
const  { data: products } = await useFetch('https://fakestoreapi.com/products');

useHead({
    title: 'OneGames | Play',
    meta: [
        {name: 'description', content: 'OneGames library of games'}
    ]
})

</script>

<style lang="scss" scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px 0;
}

</style>