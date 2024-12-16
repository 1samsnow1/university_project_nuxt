<template>
    <section class="my-4 mb-6">
        <nav class=" sm:px-5 text-gray-200">
                <ul class="hidden sm:flex justify-start items-center gap-3 sm:gap-6">
                    <NuxtLink v-for="item in list" :key="item" :to="item.address">
                        <li class="sm:text-lg cursor-pointer hover:text-yellow-400 transition-all duration-300">{{item.name}}</li>
                    </NuxtLink>
                    <NuxtLink to="/admin">
                        <li class="hidden sm:block p-1 px-3 bg-gray-800 bg-opacity-5 rounded-3xl cursor-pointer hover:bg-blue-200 hover:text-gray-800 transition-all duration-300 border border-x-0 border-blue-400">پنل ادمین</li>
                    </NuxtLink>
                </ul>
                <!-- mobile menu -->
        </nav>
    </section>
</template>

<script setup>
let list = [
    {name:'صفحه اصلی',address:'/'},
    {name:'خبرها',address:'/news'},
    {name:'پروژه ها',address:'/products'},
    {name:'نقشه ها',address:'/maps'},
    {name:'درباره ما',address:'/about'},
];

</script>