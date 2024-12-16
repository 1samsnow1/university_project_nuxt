<template>
    <section class="contentSize my-10">
        <MapDetails/>

        <!-- other maps -->
         <section class="bg-gray-50 shadow-sm shadow-gray-300 mt-6 py-2 px-2 rounded-md">
            <div class="w-full border-b-2 pb-1 border-orange-800">
                <h3 class="title_style text-gray-100 text-xl px-4 bg-gradient-to-tr from-orange-950 via-orange-700 to-orange-300 text-center">نقشه های دیگر</h3>
            </div>
            <div class="pt-8 pb-2 px-3 flex items-center gap-2 overflow-x-scroll scrollDirection darkScrollBar">
                <MapCard v-for="map in maps" :map="map"/>
            </div>
         </section>

         <div class="bg-gray-50 shadow-sm shadow-gray-400 mt-6 px-3 py-2 flex items-center gap-6 overflow-x-scroll scrollDirection darkScrollBar rounded-md">
            <Member v-for="i in 2"/>
        </div>

    </section>
</template>

<script setup>
let maps = [
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',type:'مدارمنطقی'},
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',type:'مدارمنطقی'},
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',type:'مدارمنطقی'},
    {name:'لامپ رومیزی آبی رنگ صنعتی',price:'20000',type:'مدارالکتریکی'},
];
</script>