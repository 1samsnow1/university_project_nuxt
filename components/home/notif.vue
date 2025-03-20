<template>
    <NuxtLink :to="`/news/${news.id}`">
        <article class="w-full bg-white flex flex-col sm:flex-row justify-center gap-4 px-3 pb-4 sm:pb-0 shadow-sm shadow-gray-400 md:hover:border-gray-500 border border-transparent transition-all duration-300 cursor-pointer">

            <figure class="w-min-32 w-full sm:w-fit h-32 sm:min-w-44 sm:h-44 overflow-hidden rounded-md">
                <img class="w-full h-full" :src="news.file.path" alt="notification_image">
            </figure>

            <div class="w-full sm:w-3/4 translate-y-2">
                <h3 class="font-bold text-lg text-gray-700">{{ news.title }}</h3>
                <span class="text-xs sm:text-sm text-gray-500 font-sans">1402/08/04</span>
                <p class="line-clamp-2 overflow-hidden overflow-ellipsis sm:mt-5 mt-2 text-sm md:text-base">
                    {{ news.summary }}
                </p>
            </div>
        </article>
    </NuxtLink>
</template>

<script setup>
let props = defineProps(['news']);
</script>
