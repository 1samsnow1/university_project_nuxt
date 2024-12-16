<template>
    <section class="min-w-[300px] mr-3 sm:min-w-[400px] sm:mr-0 md:min-w-[700px] lg:min-w-[900px]">
        <AdminFormList v-if="formSection=='list'" :listView="data" @changeForm="changeForm" @goToEdit="goToEdit"/>
        <AdminFormAdd v-if="formSection=='add'" :panelName="panelName" @changeForm="changeForm"/>
        <AdminFormEdit :panelName="panelName" v-if="formSection=='edit'" @changeForm="changeForm"/>
    </section>
</template>

<script setup>
let news = [
    {name:'نام خبر',id:1},
    {name:'نام خبر',id:2},
    {name:'نام خبر',id:3},
    {name:'نام خبر',id:4},
    {name:'نام خبر',id:5},
];
let products = [
    {name:'نمونه کار',id:1},
    {name:'نمونه کار',id:2},
    {name:'نمونه کار',id:3},
    {name:'نمونه کار',id:4},
    {name:'نمونه کار',id:5},
];
let maps = [
    {name:'نقشه',id:1},
    {name:'نقشه',id:2},
    {name:'نقشه',id:3},
    {name:'نقشه',id:4},
    {name:'نقشه',id:5},
];
let members = [
    {name:'نام عضو',id:1},
    {name:'نام عضو',id:2},
    {name:'نام عضو',id:3},
    {name:'نام عضو',id:4},
    {name:'نام عضو',id:5},
];
const {panelName} = useRoute().query;
const {data} = await useFetch(`/api/productRequest?panelName=${panelName}`);
console.log(data.value)

let formSection = ref('list');
const changeForm = (status)=>{
    formSection.value = status
}

let newsDetail = ref(0);
const goToEdit = (status,newsId)=>{
    formSection.value = status;
    newsDetail.value = newsId;
}
</script>