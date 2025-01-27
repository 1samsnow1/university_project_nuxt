<template>
    <section class="w-60 h-40 bg-gray-400 rounded-xl sm:w-96 sm:h-60 translate-x-2 sm:translate-x-10 -translate-y-10 md:translate-x-10 md:-translate-y-20 flex justify-start cursor-pointer relative group">

        <figure class="relative shadow-md shadow-gray-900 rounded-xl overflow-hidden">
            <img class="z-20 w-full h-full lg:group-hover:scale-110 hoverTransition" src="@/assets/images/engineer.jpg" alt="lab_img">
            <div class="absolute w-full h-full top-0 left-0 bg-gray-900 bg-opacity-30 lg:group-hover:bg-opacity-10 hoverTransition"></div>
        </figure>

        <h3 class="absolute top-2 right-4 text-gray-100 font-bold text-lg">موضوع </h3>

        <span class="w-52 absolute sm:w-80 top-10 right-4 text-sm sm:text-base text-gray-100">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </span>

        <span class="absolute bottom-4 left-4 bg-red-700 group-hover:bg-blue-600 hoverTransition border border-gray-200 px-3 rounded-full text-gray-100">جدید</span>
    </section>
</template>

<script setup>
</script>