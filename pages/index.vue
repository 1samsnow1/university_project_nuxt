<template>
    <section class="w-full mb-10">
        <div class="contentSize px-3">

            <!-- banner section -->
            <HomeBanner/>

            <!-- news -->
            <LazyHomeSpecialNews class="my-8"/>


            
            <section class="section-style ">

                <!-- work examples -->
                 <h2 class="leaf-title lg:text-lg translate-x-4 lg:translate-x-5 -translate-y-3 lg:-translate-y-4 gradient_color text-white z-50">پروژه ها</h2>
                 <div class="w-full h-1 border-b-2 border-blue-900"></div>
                <!-- cardBox -->
                <section class="pb-1 relative">
                    <LazyToProductBtn class="my-4" :toAddress="'/products'"/>
                    <div class="home_card_box_style border-r scrollDirection darkScrollBar">
                    
                        <LazyProductCard v-if="projectsList" class="z-50" v-for="project in projectsList" :product="project"/>
                        <LoadingCard v-else v-for="i in 3"/>
                        <!-- <p class="text-red-600">پروژه ای در حال حاضر موجود نیست</p> -->
                    </div>
                </section>
            </section>
                
                <!-- members section -->
                <section class="section-style my-8">
                    <h2 class="text-2xl text-yellow-700 text-center my-10 pb-2 border-b-2 border-blue-700">اعضای انجمن</h2>
                    <div class="md:grid md:grid-cols-4 gap-2 flex items-center pb-2 overflow-x-scroll scrollDirection md:overflow-hidden">
                    <LazyMember v-for="i in 4"/>
                    </div>
                </section>

            <LazyHomePeyvands class="my-10"/>

        </div>
    </section>
</template>

<script setup>
// import  HomecompoBanner from '../components/home/banner.vue';
definePageMeta({
    layout: 'home'
})
// let projectsList = [
//     {position:'student'},
//     {position:'student'},
//     {position:'student'},
//     {position:'student'},
//     {position:'professor'},
// ]
let projectsList = ref(null)
async function requestProjects (){
    const {data} = await $fetch("https://resume.bargh-saman.ir/api/products");
    projectsList.value = data;
    console.log(data);
}
requestProjects();

// let visibleEl = ref(null);
// onMounted(()=>{
//   const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry) => {
//       if(entry.intersectionRatio>0){
//           if(entry.target.id == 'news' && visibleEl <2){
//             visibleEl.value = 1;
//           }if(entry.target.id=='midContent'){
//             visibleEl.value = 2;
//             console.log(visibleEl.value)
//           }
//         observer.unobserve(entry.target);

//       }
//     });
//   })

//   let news = document.querySelector('#news');
//   observer.observe(news);
//   let midContent = document.querySelector('#midContent');
//   observer.observe(midContent);
// })
</script>

<style scoped>
.moveUpDown {
  animation: moveUpAndDown linear forwards;
  animation-timeline: view();
  transform: translateY(-12rem);
}
@keyframes moveUpAndDown {
  0%{
    transform: translateY(-12rem);
  }
  30%{
    transform: translateY(-20rem);
  }
}
</style>