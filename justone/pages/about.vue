<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rerum quod nam porro nisi vero facere incidunt dolorum facilis eos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rerum quod nam porro nisi vero facere incidunt dolorum facilis eos.</p>
        <div>{{  data  }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP')

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