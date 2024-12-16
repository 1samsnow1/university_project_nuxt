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
                <li v-for="item in menuList" :key="item.nameId" @click="showChosenCategory(item.nameId,item.panel_id)" :class="item.nameId==panelSection?'font-bold scale-110 text-orange-400':''" class="w-full py-6 text-center cursor-pointer lg:hover:font-bold lg:hover:bg-gray-700">{{ item.name }}</li>
                <li @click="goHome" class="text-red-600 cursor-pointer lg:hover:font-bold">خروج</li>
            </ul>
        </div>

        <!-- chosen content -->
        <div :class="menuStatus?'contentWidth':'w-full'" class="shortHoverTransition h-svh bg-gray-400 flex justify-center items-center overflow-y-scroll panelScrollBar">
            <div v-if="chosenPanel==0" class="bg-blue-950 text-white px-5 py-2 rounded-lg shadow-md shadow-gray-950">به پنل ادمین خوش آمدید</div>
            <AdminForm v-if="chosenPanel==1"/>
            <AdminAbout v-if="chosenPanel==2"/>
        </div>
    </section>
</template>

<script setup>
definePageMeta({
    layout: 'admin'
})
import menuIcon from '~/components/iconsComponents/menuIcon.vue';

let menuList = [
    {name:'خبرها',nameId:'news',panel_id:'1'},
    {name:'نمونه کارها',nameId:'product',panel_id:'1'},
    {name:'نقشه ها',nameId:'map',panel_id:'1'},
    {name:'اعضا',nameId:'member',panel_id:'1'},
    {name:'درباره ما',nameId:'about',panel_id:'2'},
];
const router = useRouter();
let chosenPanel = ref(0);
let panelSection = ref(null)
const showChosenCategory = (chosenOption,panelOption)=>{
    chosenPanel.value = 0;
    panelSection.value = chosenOption;
    setTimeout(() => {
        chosenPanel.value = panelOption;
    }, 20);
    router.push({path:'/admin/panel',query :{panelName : chosenOption}});
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
const goHome = ()=>{
    router.push('/')
}
</script>

<style scoped>
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