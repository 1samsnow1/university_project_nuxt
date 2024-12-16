<template>
    <NuxtLink to="/news/1">
        <article class="w-fit bg-white flex justify-center gap-4 px-3 shadow-sm shadow-gray-400 md:hover:border-gray-500 border border-transparent transition-all duration-300 cursor-pointer">

            <figure class="w-min-32 h-32 sm:min-w-44 sm:h-44 overflow-hidden rounded-md">
                <img class="w-full h-full" src="@/assets/images/electronicLamp.png" alt="notification_image">
            </figure>

            <div class="w-3/4 translate-y-2">
                <h3 class="font-bold text-lg text-gray-700">موضوع اعلامیه</h3>
                <span class="text-xs sm:text-sm text-gray-500 font-sans">1402/08/04</span>
                <p class="line-clamp-2 overflow-hidden overflow-ellipsis sm:mt-5 mt-2 text-sm md:text-base">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                </p>
            </div>
        </article>
    </NuxtLink>
</template>

<script setup>
</script>