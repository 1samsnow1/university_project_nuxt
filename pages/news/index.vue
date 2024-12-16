<template>
    <section class="contentSize my-20 p-4 bg-gray-50 rounded-sm shadow-sm shadow-gray-300">
        <div class="w-full border-b-2 pb-1 mb-4 border-blue-700">
            <h3 class="title_style text-gray-100 text-xl px-4 bg-gradient-to-tr from-blue-900 via-blue-500 to-blue-300">خبر / اعلامیه</h3>
        </div>
        <div class="flex flex-col items-start gap-4">
            <HomeNotif v-for="i in 6"/>
        </div>
    </section>
</template>

<script setup>
</script>