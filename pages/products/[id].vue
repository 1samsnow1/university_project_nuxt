<template>
    <section class="contentSize px-2 sm:px-0 my-20">
      <article class="w-full flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50 rounded-md shadow-sm shadow-gray-400 px-4 pb-2 md:px-0 md:pl-4 overflow-hidden relative">
  
        <div class="absolute top-2 left-0">
          <div class="w-20 h-20 relative overflow-hidden">
            <div class="w-full absolute bottom-0 bg-emerald-600 animate-fillTheBlank"></div>
            <img class="w-full h-full absolute" src="@/assets/images/whiteZip.png" alt="whiteZip">
          </div>
        </div>
  
        <div class="w-60">
          <swiper-container
          :modules="modules"
          :pagination="{clickable:true}"
          :mousewheel= "{
            enabled:true,
          }" 
          slides-per-view="1">
  
            <swiper-slide v-for="i in 2" :key="pic" class="w-full -translate-y-5">
              <img class="w-full h-full" src="@/assets/images/redlamp.png" alt="lampImage">
            </swiper-slide>
  
          </swiper-container>
        </div>
  
        <div class="flex flex-col items-start md:translate-y-4">
          <h3 class="md:text-xl text-lg text-blue-700 font-bold text-right" >نام نمونه کار</h3>
          <span class="text-xs sm:text-sm font-sans text-gray-400 mb-6 md:mb-10 lg:">1402/08/02</span>
  
          <div class="text-gray-800 text-justify">
            <span class="font-bold">توضیحات: </span>
            <span class="text-xs sm:text-base">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</span>
          </div>
        </div>  
  
      </article>
      <div class="w-full flex justify-start gap-4 mt-10 overflow-x-scroll darkScrollBar">
        <Member v-for="i in 2"/>
      </div>
    </section>
  </template>
  
<script setup>
  import 'swiper/css';
  import { onMounted } from 'vue';
  import { register } from 'swiper/element/bundle';
  register();
  
  // add swiper event to buttons 
  onMounted(()=>{
    //   const swiperEl = document.querySelector('swiper-container');
    //   const buttonNext = document.querySelector('#next');
    //   const buttonPrev = document.querySelector('#prev');
  
    //   buttonNext.addEventListener('click', () => {
    //       swiperEl.swiper.slideNext();
    //   });
    //   buttonPrev.addEventListener('click', () => {
    //       swiperEl.swiper.slidePrev();
    //   });
  
      // swiper per view breakpoints
    //   const swiperParams = {
    //   slidesPerView: 1,
    //   breakpoints: {
    //     845: {
    //       slidesPerView: 2,
    //     },
    //   },
    //   on: {
    //     init() {
    //     },
    //   },
    // };
    // Object.assign(swiperEl, swiperParams);
    // swiperEl.initialize();
  })
  </script>