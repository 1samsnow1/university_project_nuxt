<template>
    <section class="bg-gray-50 shadow-sm shadow-gray-300 border-t-2 border-blue-400 overflow-hidden rounded-b-md py-2 pr-3 pl-3 md:pl-0">
        <!-- title and buttons -->
        <div class="w-full flex justify-between items-center mb-2">

            <h2 class="text-blue-700 text-lg font-bold">اخبار</h2>
            <!-- swiper buttons -->
            <div class="md:ml-2 lg:ml-6">
                <button class="ml-2" id="prev">
                    <rightSwiperArrow/>
                </button>
                <button id="next">
                    <leftSwiperArrow/>
                </button>
            </div>
        </div>

        <swiper-container speed="500" loop="true" css-mode="true">

            <swiper-slide v-for="i in 4" class="w-full flex items-start gap-2">
                <!-- card image -->
                <figure class="min-w-24 h-24 min-[355px]:w-32 min-[355px]:min-w-32 min-[355px]:h-32 lg:w-40 lg:h-40 bg-blue-100 border border-gray-400 rounded-md">
                    <img class="w-full h-full" src="@/assets/images/wire.png" alt="news_img">
                </figure>
                <!-- card info -->
                <div>
                    <div class="lg:w-[14rem] xl:w-72 overflow-ellipsis overflow-hidden line-clamp-2 lg:line-clamp-3">
                        <span class="text-sm text-justify text-gray-900">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها ویژه  
                        </span>
                    </div>

                    <!-- card button -->
                    <div class="flex justify-end items-end mt-6 min-[355px]:mt-12 lg:mt-14 translate-x-1">
                            <button class="px-2 py-1 bg-blue-900 text-gray-200 rounded-full text-xs lg:text-sm">اطلاعات بیشتر</button>
                    </div>
                </div>
            </swiper-slide>

        </swiper-container>
    </section>
</template>

<script setup>
import 'swiper/css';
import rightSwiperArrow from '../iconsComponents/rightSwiperArrow.vue';
import leftSwiperArrow from '../iconsComponents/leftSwiperArrow.vue';
import { onMounted } from 'vue';
import { register } from 'swiper/element/bundle';
register();

// add swiper event to buttons 
onMounted(()=>{
    const swiperEl = document.querySelector('swiper-container');
    const buttonNext = document.querySelector('#next');
    const buttonPrev = document.querySelector('#prev');

    buttonNext.addEventListener('click', () => {
        swiperEl.swiper.slideNext();
    });
    buttonPrev.addEventListener('click', () => {
        swiperEl.swiper.slidePrev();
    });

    // swiper per view breakpoints
    const swiperParams = {
    slidesPerView: 1,
    breakpoints: {
      845: {
        slidesPerView: 2,
      },
    },
    on: {
      init() {
      },
    },
  };
  Object.assign(swiperEl, swiperParams);
  swiperEl.initialize();
})
</script>