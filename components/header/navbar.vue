<template>
    <section class="">
        <nav class="text-gray-100 sm:px-5">
                <ul class="hidden sm:flex justify-start items-center gap-3 sm:gap-6">
                    <NuxtLink v-for="item in list" :key="item" :to="item.address">
                        <li class="text-sm lg:text-lg cursor-pointer hover:text-yellow-400 transition-all duration-300">{{item.name}}</li>
                    </NuxtLink>
                    <NuxtLink to="/userAcc">
                        <li class="text-sm lg:text-lg cursor-pointer bg-blue-800 hover:bg-yellow-600 transition-all duration-300 border border-x-0 border-blue-300 rounded-full px-3 flex items-center gap-1">
                            <span>ورود</span>
                            <loginIcon :iconColor="'white'"/>
                        </li>
                    </NuxtLink>
                </ul>
                <!-- mobile menu -->
        </nav>
    </section>
</template>

<script setup>
import loginIcon from '../iconsComponents/loginIcon.vue';
let list = [
    {name:'صفحه اصلی',address:'/'},
    {name:'خبرها',address:'/news'},
    {name:'پروژه ها',address:'/products'},
    {name:'درباره ما',address:'/about'},
];

</script>