<template>
    <NuxtLink to="/products/1">
        <article class="card_styles group relative gap-2 bg-white shadow-sm shadow-gray-400">
            <figure class="card_figure_style group-hover:blur-sm shortHoverTransition">
                <img class="imageSize" src="@/assets/images/lampImage.png" alt="sample_image">
            </figure>
            
            <div class="px-2 pb-4 group-hover:blur-sm shortHoverTransition">
                <h3 class="w-full overflow-hidden overflow-ellipsis line-clamp-3 font-bold text-sm">لامپ رومیزی آبی رنگ صنعتی</h3>
                <p class="my-3 pr-2">
                    <span class="text-xl sm:text-2xl">20000 </span>تومان 
                </p>
                <p v-if="product.position=='student'" class="text-blue-600 text-xs sm:text-sm">پروژه دانشجویی</p>
                <p v-else class="text-yellow-600 text-xs sm:text-sm">پروژه استاد</p>
            </div>
            
            <div class="w-full h-full text-sm md:text-base p-2 absolute opacity-0 shortHoverTransition group-hover:opacity-100 rounded-md flex flex-col justify-between items-start bg-gray-950 bg-opacity-80">
                <div class="flex flex-col items-start gap-2">
                    <span v-if="product.position=='student'" class="text-blue-500 z-20">دانشجو : محمدرضا ..</span>
                    <span v-else class="text-yellow-400 z-20">استاد : محمدرضا ..</span>
                    <span class="text-yellow-500 z-20">قیمت : 200000 تومان</span>
                    <span class="text-justify text-sm text-gray-400 z-20">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</span>
                </div>
                <span class="w-full text-center text-sm bg-blue-700 text-white rounded-md py-4 z-20">مشاهده جزییات</span>
            </div>
        </article>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['product'])
</script>