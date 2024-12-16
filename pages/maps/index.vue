<template>
    <section class="contentSize my-2 bg-gray-50 sm:p-2 minHeight">
        <div class="w-full border-b-2 pb-1 mb-4 border-orange-800">
            <h3 class="title_style text-gray-100 text-xl px-4 bg-gradient-to-tr from-orange-950 via-orange-700 to-orange-300 text-center">نقشه ها</h3>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mb-10 px-2 sm:px-0">
            <MapCard v-for="map in maps" :map="map"/>
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
<style scoped>
.minHeight {
    min-height: 100vh;
}
</style>