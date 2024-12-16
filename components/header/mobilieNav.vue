<template>
    <div class="absolute -top-1 right-2 sm:right-16 z-50">
        <menuIcon @click="toggleMenu()"/>
            <ul id="mobileMenu" class="w-0 h-0 bg-gradient-to-tr gradient_color overflow-hidden absolute top-5 right-0 pr-3 flex flex-col gap-2 transition-all duration-300 rounded-md shadow-sm shadow-gray-900">
                <button @click="toggleMenu" class="text-gray-200 absolute -top-1 left-1 text-2xl">×</button>
                <li @click="toggleMenu" v-for="item in list" :key="item" class="text-gray-200 cursor-pointer md:hover:text-yellow-400 transition-all duration-300">
                    <NuxtLink :to="item.address">
                        {{ item.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
</template>

<script setup>
import menuIcon from '../iconsComponents/menuIcon.vue';

let menuStatus = ref(false);
let list = [
    {name:'صفحه اصلی',address:'/'},
    {name:'پروژه ها',address:'/products'},
    {name:'نقشه ها',address:'/maps'},
    {name:'درباره ما',address:'/about'},
    {name:'خبرها',address:'/news'},
    {name:'ادمین',address:'/admin'},
];
const toggleMenu = ()=>{
    if(!menuStatus.value) {
        document.querySelector('#mobileMenu').style.width = '200px';
        document.querySelector('#mobileMenu').style.height = '224px';
        menuStatus.value = true;
    }else {
        document.querySelector('#mobileMenu').style.width = '0px';
        document.querySelector('#mobileMenu').style.height = '0px';
        menuStatus.value = false;
    }
}
</script>