<template>
    <Head v-if="product">
        <Title>OneGames | {{ product.title }}</Title>
        <Meta name="description" :content="product.description" />
    </Head>
    <div v-if="product">
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// fetch the product
const { data: product } = await useFetch(uri);

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true})
}

definePageMeta({
    layout: 'games'
})
</script>

<style lang="scss" scoped>

</style>