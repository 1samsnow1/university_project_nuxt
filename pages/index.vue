<template>
    <section class="w-full mb-10">
        <div class="contentSize px-3">

            <!-- banner section -->
            <HomeBanner class="mb-10 sm:mb-0"/>

            <!-- news -->
            <div >
                <HomeSpecialNews />
            </div>

            <HomeNotifBox class="mt-20"/>

            

            <HomeBoxArch class="z-10 mt-14"/>

            <section class="w-full z-50 py-4 px-2 sm:p-4 shadow-sm shadow-gray-400 bg-gray-50 border-t border-blue-600 transition-all duration-300 moveUpDown">

                <!-- work examples -->
                 <h2 class="content_title z-50">پروژه ها</h2>
                <!-- cardBox -->
                <section class="z-50 relative sm:px-3">
                    <ToProductBtn :toAddress="'/products'"/>
                    <div class="home_card_box_style scrollDirection darkScrollBar">
                    
                        <ProductCard class="z-50" v-for="product in products" :product="product"/>
                    </div>
                </section>
                <!-- map section -->
                <section class="relative mt-8">
                    <h3 class="content_title">مدار ها</h3>
                        <ToProductBtn :toAddress="'/maps'"/>
                    <div class="home_card_box_style scrollDirection darkScrollBar">
                        <MapCard v-for="map in maps" :map="map"/>
                    </div>
                </section>
                <!-- team info -->
                <HomeTeamInfo/>
                <!-- members section -->
                <section>
                    <h2 class="text-2xl text-yellow-700 text-center my-10 pb-2 border-b-2 border-blue-700">اعضای انجمن</h2>
                    <div class="md:grid md:grid-cols-4 gap-2 flex items-center pb-2 overflow-x-scroll scrollDirection md:overflow-hidden">
                    <Member v-for="i in 6"/>
                    </div>
                </section>
            </section>

            <HomePeyvands class="-translate-y-28"/>

        </div>
    </section>
</template>

<script setup>
// import  HomecompoBanner from '../components/home/banner.vue';
definePageMeta({
    layout: 'home'
})
let products = [
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',position:'student'},
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',position:'student'},
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',position:'student'},
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',position:'student'},
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',position:'professor'},
];
let maps = [
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',type:'مدارمنطقی'},
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',type:'مدارمنطقی'},
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',type:'مدارمنطقی'},
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',type:'مدارالکتریکی'},
];
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