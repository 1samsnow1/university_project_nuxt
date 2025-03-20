<template>
    <NuxtLink :to="`/products/${product.id}`">
        <article class="card_styles group bg-white shadow">
            <figure class="card_figure_style shortHoverTransition p-2 pb-0">
                <img class="imageSize rounded-lg -translate-x-0 -translate-y-6 shadow-sm shadow-gray-900 shortHoverTransition" :src="product.file.path" alt="sample_image" loading="lazy">
            </figure>
            
            <div class="w-full text-right px-2 mt-1 -translate-y-6 shortHoverTransition z-10">
                <!-- <span v-if="product.position=='student'" class="text-blue-500 text-sm">پروژه دانشجویی</span>
                <span v-else class="text-yellow-600 text-sm">پروژه استاد</span> -->
                <h3 class="w-full overflow-hidden overflow-ellipsis line-clamp-1 font-bold text-sm sm:text-base mt-2 mb-4">{{ product.name }}</h3>
                <p class="text-right text-sm sm:text-base">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                <button class="mt-8 px-3 border border-blue-700 group-hover:border-transparent rounded-xl group-hover:bg-blue-700 group-hover:text-gray-100 text-blue-700 float-end shortHoverTransition">مشاهده</button>
            </div>
            
            <!-- <div class="w-full h-full z-20 text-sm md:text-base p-2 absolute opacity-0 shortHoverTransition lg:group-hover:opacity-100 rounded-md flex flex-col justify-between items-start bg-blur bg-gray-950 bg-opacity-80">
                <div class="flex flex-col items-start gap-2">
                    <span v-if="product.position=='student'" class="text-blue-400">دانشجو : محمدرضا ..</span>
                    <span v-else class="text-yellow-300">استاد : محمدرضا ..</span>
                    <span class="text-justify text-sm text-gray-400">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</span>
                </div>
                <span class="w-full text-center text-sm bg-blue-700 text-white rounded-md py-3">مشاهده جزییات</span>
            </div> -->
        </article>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['product'])
</script>

<style scoped>
.bg-blur {
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
}
</style>