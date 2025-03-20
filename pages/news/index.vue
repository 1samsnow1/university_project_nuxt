<template>
    <section class="contentSize2 my-10 p-4 bg-gray-50 rounded-sm shadow-sm shadow-gray-300">
        <div class="w-full border-b-2 mb-4 border-blue-700">
            <h3 class="leaf-title translate-x-5 -translate-y-8 sm:translate-x-6 sm:-translate-y-6 text-white text-xl px-4 gradient_color">خبر / اعلامیه</h3>
        </div>
        <div class="flex flex-col items-start gap-4">
            <loader v-if="!newsList"/>
            <HomeNotif class="w-full" v-else v-for="news in newsList" :news="news"/>
        </div>
    </section>
</template>

<script setup>
import loader from '~/components/iconsComponents/loader.vue';

let newsList = ref(null)
async function requestNewsList (){
   try{
        const newsRequest = await $fetch("https://resume.bargh-saman.ir/api/news");
        newsList.value = newsRequest;
   }catch(err){
    console.log("error :"+err);
   }
}
requestNewsList();
</script>

<style scoped>
</style>