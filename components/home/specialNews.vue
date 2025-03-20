<template>
    <section class="bg-gray-50 shadow-sm shadow-gray-300 border-t border-gray-200 rounded-md py-2 pr-3 pl-3">
        <!-- title and buttons -->
        <div class="w-full flex justify-between items-center mb-2">

            <h2 class="leaf-title translate-x-4 -translate-y-6 text-gray-100 text-lg gradient_color">خبر ها</h2>
            <!-- swiper buttons -->
            <div class="md:ml-2 lg:ml-6">
                <button @click="swiper.prev()" class="ml-2" id="prev">
                    <rightSwiperArrow/>
                </button>
                <button @click="swiper.next()">
                    <leftSwiperArrow/>
                </button>
            </div>
        </div>
        <ClientOnly>
            <swiper-container ref="containerRef">
                <swiper-slide v-if="newsList.length>0" v-for="(item, idx) in newsList" :key="idx" class="group p-2 cursor-pointer">
                    <figure class="w-full h-40 lg:h-52 rounded-md overflow-hidden">
                        <img class="w-full h-full lg:group-hover:scale-110 hoverTransition" :src="item.file.path" :alt="item.title">
                    </figure>
                    <div class="contentz">
                        <h3 class="font-bold md:text-lg mt-1 mb-2">{{ item.title }}</h3>
                        <p class="overflow-ellipsis overflow-hidden line-clamp-2 text-sm md:text-base mb-6">{{ item.summary }}</p>
                        <button class="px-3 py-1 text-sm hoverTransition text-yellow-700 group-hover:text-gray-100 group-hover:bg-yellow-700 border border-yellow-700 rounded-full">مشاهده خبر</button>
                    </div>
                </swiper-slide>

                <!-- loading  -->
                <swiper-slide v-else class="group p-2 cursor-pointer animate-pulse">
                    <div class="w-full h-40 lg:h-52 rounded-md bg-gray-300">
                    </div>
                    
                    <div class="contentz">
                        <div class="w-24 h-6 mt-1 mb-2 bg-gray-300 rounded"></div>
                        <div class="w-full h-4 mt-2 mb-1 bg-gray-300 rounded"></div>
                        <div class="w-4/5 h-4 bg-gray-300 rounded"></div>     
                        <div class="w-24 h-6 mt-2 bg-gray-300 rounded-full"></div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </ClientOnly>
    </section>
</template>

<script setup lang="ts">
import leftSwiperArrow from '../iconsComponents/leftSwiperArrow.vue';
import rightSwiperArrow from '../iconsComponents/rightSwiperArrow.vue';
import loader from '../iconsComponents/loader.vue';
// Create 10 slides
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))

// request from server
interface File {
    id: number,
    path : string,
}
interface news {
    id: number,
    title : string,
    summary : string,
    file_id : string,
    file : File,
}
let newsList = ref<news[]>([])
async function fetchNews (){
    try{
        const requestNews = await $fetch<news[]>("https://resume.bargh-saman.ir/api/news");
        newsList.value = requestNews;
        console.log(newsList);
    }catch(err){
        console.log(err)
    }
}
fetchNews();

const swiper = useSwiper(containerRef,{
    spaceBetween: 10,
    loop: true,
    autoplay: {
    delay: 1000,
  },
    slidesPerView : 1,
    breakpoints :{
        500:{
            slidesPerView:2
        },
        900: {
            slidesPerView: 3
        }
    }
})

onMounted(() => {
  // Access Swiper instance
  // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
//   console.log(swiper.instance)
})
</script>

<style scoped>
.contentz {
    z-index: 30;
}
.imgz {
    z-index: 0;
}
</style>