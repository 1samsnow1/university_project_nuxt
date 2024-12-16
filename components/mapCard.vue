<template>
    <NuxtLink to="./maps/1">
        <article class="bg-white group card_styles shortHoverTransition lg:hover:-translate-y-4 group shadow-sm shadow-gray-400">
            <figure class="card_figure_style">
                <img class="imageSize" src="@/assets/images/mapIcon.png" alt="map_image">
            </figure>
            <div class="w-full p-2">
                <h3 class="text-sm sm:text-base truncate mt-2">مدار ترانس سوئیچینگ</h3>
                <div :class="map.type=='مدارمنطقی'?'text-red-600':'text-yellow-500'" class="w-full mb-1 mt-2 text-right text-xs">
                    {{ map.type }}
                </div>
                <p class="w-full lg:w-4/5 shortHoverTransition mx-auto lg:group-hover:w-full rounded-sm text-center bg-gradient-to-tr from-orange-950 via-orange-700 to-orange-300 text-gray-100">مشاهده</p>
            </div>
        </article>
    </NuxtLink>
</template>

<script setup>
let props = defineProps(['map'])
</script>