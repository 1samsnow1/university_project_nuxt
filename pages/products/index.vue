<template>
    <section class="contentSize my-10 p-2 md:p-4 bg-gray-100 md:rounded-lg md:shadow-md shadow-gray-400">
        <div class="w-full border-b-2 pb-1 mb-4 border-blue-800">
            <h3 class="title_style text-gray-100 text-xl px-4 gradient_color text-center">پروژه ها</h3>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
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