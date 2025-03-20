<template>
    <section class="contentSize my-6">
        <figure class="w-full h-60 md:h-96 xl:h-[30rem] relative p-1">
            <div v-if="!newsDetail" class="w-full h-full bg-gray-300"></div>
            <img v-else class="w-full h-full rounded-md absolute top-0 left-0 shadow-sm shadow-gray-300" src="@/assets/images/engineerHQ.jpg" alt="news_image">
        </figure>
        <div class="w-[90%] mx-auto bg-white -translate-y-20 p-2 px-4 rounded-md shadow-sm shadow-gray-300">
            <div v-if="!newsDetail" class="w-20 h-3 bg-gray-300"></div>
            <span v-else class="w-full text-xs lg:text-sm text-right text-gray-500">{{ newsDetail.created_at }}</span>
            <div v-if="!newsDetail" class="w-full h-5 my-3 bg-gray-300"></div>
            <h2 v-else class="w-full titrFont text-slate-800 text-right font-bold text-lg lg:text-2xl">
                {{ newsDetail.title }}
            </h2>
            <div v-if="!newsDetail" class="w-full h-8 bg-gray-300"></div>
            <p v-else class="mt-4 mx-auto text-justify text-gray-900 text-xs sm:text-base leading-6">
                {{ newsDetail.summary }}
            </p>
        </div>
    </section>
</template>

<script setup>

let route = useRoute();
let newsDetail = ref(null)
async function requestNewsDetail (){
    let id = route.params.id
   try{
        const newsDetailRequest = await $fetch(`https://resume.bargh-saman.ir/api/news/${id}`);
        newsDetail.value = newsDetailRequest;
   }catch(err){
    console.log("error :"+err);
   }
}
requestNewsDetail();
</script>

<style scoped>
.img {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
}
.img.loaded {
    opacity: 1;
}
.img2 {
    @apply blur-sm;
}
.img2.loaded{
    @apply blur-none;
}
</style>