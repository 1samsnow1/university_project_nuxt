<template>
    <div class="">
        <menuIcon @click="toggleMenu()"/>
            <ul id="mobileMenu" :class="menuStatus?'pr-6':'pr-0'" class="w-0 costumHeight overflow-hidden fixed -top-2 -right-4 sm:-right-[72px] z-50 pt-3 flex flex-col gap-2 transition-all duration-200 rounded-md text-gray-100 bg-gradient-to-t from-blue-900 to-blue-500">
                <button @click="closeMenu" class="absolute top-1 left-3 text-3xl">×</button>
                <li @click="toggleMenu" v-for="item in list" :key="item" class="cursor-pointer md:hover:text-yellow-400 transition-all duration-300 truncate">
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
    {name:'خبرها',address:'/news'},
    {name:'پروژه ها',address:'/products'},
    {name:'درباره ما',address:'/about'},
    {name:'ورود',address:'/userAcc'},
];

const emit = defineEmits()
const closeMenu = ()=>{
    document.querySelector('#mobileMenu').style.width = '0px';
    menuStatus.value = false;
    emit('toggleBg')
}
const toggleMenu = ()=>{
    if(!menuStatus.value) {
        document.querySelector('#mobileMenu').style.width = '180px';
        menuStatus.value = true;
        emit('toggleBg')
    }else {
        document.querySelector('#mobileMenu').style.width = '0px';
        menuStatus.value = false;
        emit('toggleBg')
    }
}
</script>

<style scoped>
.costumHeight {
    height: 100vh;
}
.scrolled {
    z-index: 1000;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    @apply shadow-sm shadow-gray-300 bg-white bg-opacity-30
}
.darkGlass {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 800;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
}
</style>