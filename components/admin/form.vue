<template>
    <section class="min-w-[300px] mr-3 sm:min-w-[400px] sm:mr-0 md:min-w-[700px] lg:min-w-[900px]">
        <AdminFormList v-if="formSection=='list'" :listView="requestedData" @changeForm="changeForm" @goToEdit="goToEdit"/>
        <AdminFormAdd v-if="formSection=='add'" :panelName="panelName" @changeForm="changeForm"/>
        <AdminFormEdit :panelName="panelName" v-if="formSection=='edit'" @changeForm="changeForm"/>
    </section>
</template>

<script setup>
import loader from '../iconsComponents/loader.vue';
const {panelName} = useRoute().query;
// const {data} = await useFetch(`/api/productRequest?panelName=${panelName}`);
// const requestedData = await useFetch(`https://resume.bargh-saman.ir/api/${panelName}`);
const requestedData = null;
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