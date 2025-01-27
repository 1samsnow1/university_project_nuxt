<template>
    <section class="contentSize2 minHeight my-10 p-2 md:p-4 bg-gray-50 md:rounded-lg shadow-sm shadow-gray-400">
        <div class="w-full border-b-2 pb-1 mb-2 sm:mb-10 -translate-y-3 sm:translate-y-0 border-blue-700">
            <h3 class="leaf-title translate-x-3 sm:translate-x-5 -translate-y-3 sm:-translate-y-7 text-gray-100 text-xl px-4 bg-gradient-to-l from-pink-400 via-blue-600 to-gray-900 text-center">پروژه ها</h3>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-y-10">
            <ProductCard v-for="product in products" :product="product"/>
        </div>
    </section>
</template>

<script setup>
let products = [
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',position:'student'},
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',position:'student'},
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',position:'student'},
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',position:'student'},
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',position:'professor'},
]
</script>
<style scoped>
.minHeight {
    min-height: 100vh;
}
</style>