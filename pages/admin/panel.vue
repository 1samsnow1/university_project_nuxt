<template>

        <NuxtPage/>
</template>

<script setup>
definePageMeta({
    layout:"admin"
})

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
const showChosenCategory = async (chosenOption,panelOption)=>{
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
onMounted(()=>{
    let adminLoginStatus = useCookie("adminLoginStatus")
    if(adminLoginStatus.value !== 'logedIn') {
        router.push('/admin');
    }
})
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