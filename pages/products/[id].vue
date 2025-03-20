<template>
    <section class="contentSize px-2 sm:p-1 my-20">
      <article class="w-full flex flex-col md:flex-row justify-start items-start gap-4 bg-gray-50 rounded-md shadow-sm shadow-gray-400 px-4 pb-2 md:px-0 md:pl-4 overflow-hidden relative">
  
        <div class="min-w-60 w-full sm:w-fit sm:min-w-80 max-w-96 min-h-60 p-1">
          <div v-if="!projectsDetail" class="w-full h-60 bg-gray-300"></div>
          <img v-else class="w-full h-full" :src="projectsDetail.file.path" alt="عکس پروژه">
          <!-- <swiper-container
          :modules="modules"
          :pagination="{clickable:true}"
          :mousewheel= "{
            enabled:true,
          }" 
          slides-per-view="1">
  
            <swiper-slide v-for="i in 2" :key="pic" class="w-full -translate-y-5">
              <img class="w-full h-full" src="@/assets/images/redlamp.png" alt="lampImage">
            </swiper-slide>
  
          </swiper-container> -->
        </div>
  
        <div v-if="!projectsDetail" class="pt-1">
          <div class="w-32 h-6 bg-gray-300"></div>
          <div  class="w-20 h-3 bg-gray-300 mt-1"></div>
          <div class="w-[300px] h-40 mt-2 bg-gray-300"></div>
        </div>
        <div v-else class="flex flex-col items-start pt-2">
          
          <h3 class="md:text-xl text-lg font-bold text-right" >{{ projectsDetail.name }}</h3>
          <span class="text-xs sm:text-sm font-sans text-gray-400 mb-6 md:mb-10 lg:">{{ projectsDetail.created_at }}</span>
          <div class="text-gray-800 text-justify">
            <span class="font-bold">توضیحات: </span>
            <span class="text-xs sm:text-base">{{ projectsDetail.discription }}</span>
          </div>
          <span v-if="projectsDetail.user.position=='Daneshjo'" class="text-sm text-blue-500">پروژه دانشجویی</span>
          <span v-if="projectsDetail.user.position=='Ostad'" class=" text-yellow-500">استاد {{ projectsDetail.user.name + " " + projectsDetail.user.family_name }}</span>
          <span v-if="projectsDetail.user.position=='Daneshjo'" class="mt-2 text-slate-900">{{ projectsDetail.user.name + " " + projectsDetail.user.family_name }}</span>
          
        </div>  
        
      </article>
      <div class="w-full flex justify-start gap-4 mt-10 overflow-x-scroll darkScrollBar">
        <Member v-if="projectsDetail" :user="projectsDetail.user"/>
      </div>
    </section>
  </template>
  
<script setup>
  import 'swiper/css';
  import { onMounted } from 'vue';
  import { register } from 'swiper/element/bundle';
  register();
  
  const route = useRoute();

  let projectsDetail = ref(null)
  async function requestprojectsDetail (){
    let id = route.params.id
   try{
        const projectRequest = await $fetch(`https://resume.bargh-saman.ir/api/product/${id}`);
        projectsDetail.value = projectRequest[0];
   }catch(err){
    console.log("error :"+err);
   }
}
requestprojectsDetail();


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