<template>
    <section class="w-full pageHeight flex justify-end relative">
        <!-- menu button, this one only is shown when the menu is closed  -->
        <button @click="toggleMenu()" class="z-10 absolute top-2 right-4">
            <menuIcon/>
        </button>

        <!-- menu list -->
        <div id="panelMenu" class="w-[300px] shortHoverTransition absolute top-0 right-0 z-10 h-svh bg-gray-900 text-gray-100">
            <!-- this button only is shown when the list is open -->
            <button @click="toggleMenu()" :class="menuStatus?'block':'hidden'" class="z-50 absolute top-2 right-2">
                <menuIcon/>
            </button>
            <ul :class="menuStatus?'overflow-y-scroll darkScrollBar':'overflow-hidden'" class="w-full h-full flex flex-col justify-around items-center overflow-hidden">
                    <NuxtLink @click="closeMenu" v-for="item in menuList" :key="item.name" class="w-full py-6 text-center cursor-pointer lg:hover:font-bold lg:hover:bg-gray-700" :to="item.nameRoute">{{ item.name }}</NuxtLink>
                    <trashLoader v-if="logoutLoader"/>
                <li v-else @click="goHome" class="text-red-600 cursor-pointer lg:hover:font-bold">خروج</li>
            </ul>
        </div>
        <div :class="menuStatus?'contentWidth':'w-full'" class="shortHoverTransition h-svh bg-gray-400 flex justify-center items-center overflow-y-scroll panelScrollBar">
            <slot/>
        </div>
    </section>
</template>

<script setup>
definePageMeta({
    layout: 'admin'
})
import menuIcon from '~/components/iconsComponents/menuIcon.vue';
import trashLoader from '~/components/iconsComponents/trashLoader.vue';

let menuList = [
    {name:'خبرها',nameRoute:'/admin/panel/news',panel_id:'1'},
    {name:'نمونه کارها',nameRoute:'/admin/panel/products',panel_id:'1'},
    {name:'اعضا',nameRoute:'/admin/panel/members',panel_id:'1'},
    {name:'درباره ما',nameRoute:'/admin/panel/about',panel_id:'2'},
];
const router = useRouter();
// let chosenPanel = ref(0);
// let panelSection = ref(null)
// const showChosenCategory = async (chosenOption,panelOption)=>{
//     chosenPanel.value = 0;
//     panelSection.value = chosenOption;
//     setTimeout(() => {
//         chosenPanel.value = panelOption;
//     }, 20);
//     router.push({path:'/admin/panel',query :{panelName : chosenOption}});
//     if(window.innerWidth < 883){
//         document.querySelector('#panelMenu').style.width = '0px';
//         menuStatus.value = false;
//     }
// }
const closeMenu = ()=>{
    if(window.innerWidth < 883){
        document.querySelector('#panelMenu').style.width = '0px';
         menuStatus.value = false;
    }
}

let menuStatus = ref(true);
setTimeout(() => {
    if(window.innerWidth<883){
        menuStatus.value = false;
        document.querySelector('#panelMenu').style.width = '0px';
    }
}, 20);
const toggleMenu = ()=>{
    if(menuStatus.value) {
        document.querySelector('#panelMenu').style.width = '0px';
        menuStatus.value = false;
    }else {
        document.querySelector('#panelMenu').style.width = '240px';
        menuStatus.value = true;
    }
}

let logoutLoader = ref(false);
const goHome = async ()=>{
    try {
        logoutLoader.value = true;
        const logout = await $fetch("https://resume.bargh-saman.ir/api/logout",{
            method:'GET',
            headers:{
                Authorization: `Bearer ${useCookie("userToken").value}`,
            }
        })
        let userToken = useCookie("userToken");
        let adminLoginStatus = useCookie("adminLoginStatus");
        userToken.value = null;
        adminLoginStatus.value = null;
        router.push('/');
    }catch(err) {
        console.log(err);
    }finally {
        logoutLoader.value = false;
    }
}

onMounted(()=>{
    let adminLoginStatus = useCookie("adminLoginStatus")
    if(adminLoginStatus.value !== 'logedIn') {
        router.push('/admin');
    }
})
</script>

<style scoped>
.router-link-exact-active {
    @apply font-bold scale-110 text-orange-400
}
.contentWidth {
    width: calc(100vw - 240px);
}
@media only screen and (max-width:900px){
    .contentWidth{
        width: 100%;
    }
}
.panelScrollBar::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.panelScrollBar::-webkit-scrollbar-track {
  box-shadow: none;
  border-radius: 10px;
}

/* Handle */
.panelScrollBar::-webkit-scrollbar-thumb {
  background: #111827;
  border-radius: 10px;
}
</style>