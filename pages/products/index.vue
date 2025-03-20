<template>
    <section class="contentSize2 minHeight my-10 p-2 md:p-4 bg-gray-50 md:rounded-lg shadow-sm shadow-gray-400">
        <div class="w-full border-b-2 pb-1 mb-2 sm:mb-10 -translate-y-3 sm:translate-y-0 border-blue-700">
            <h3 class="leaf-title translate-x-3 sm:translate-x-5 -translate-y-3 sm:-translate-y-7 text-gray-100 text-xl px-4 gradient_color text-center">پروژه ها</h3>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-y-10">
            <LoadingCard v-if="!projectsList"/>
            <ProductCard v-else v-for="project in projectsList" :key="project" :product="project"/>
        </div>
    </section>
</template>

<script setup>
import loader from '~/components/iconsComponents/loader.vue';

let projectsList = ref(null)
async function requestprojectsList (){
   try{
        const newsRequest = await $fetch("https://resume.bargh-saman.ir/api/products");
        projectsList.value = newsRequest;
   }catch(err){
    console.log("error :"+err);
   }
}
requestprojectsList();
</script>
<style scoped>
.minHeight {
    min-height: 100vh;
}
</style>