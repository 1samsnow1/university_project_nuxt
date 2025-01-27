<template>
    <section class="contentSize2 my-10 p-4 bg-gray-50 rounded-sm shadow-sm shadow-gray-300">
        <div class="w-full border-b-2 mb-4 border-blue-700">
            <h3 class="leaf-title translate-x-5 -translate-y-8 sm:translate-x-6 sm:-translate-y-5 text-white font-bold text-xl px-4 bg-gradient-to-tr from-blue-900 via-blue-600 to-yellow-400">خبر / اعلامیه</h3>
        </div>
        <div class="flex flex-col items-start gap-4">
            <HomeNotif v-for="i in 6"/>
        </div>
    </section>
</template>

<script setup>
</script>