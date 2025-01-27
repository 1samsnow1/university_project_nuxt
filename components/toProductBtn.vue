<template>
    <NuxtLink :to="toAddress" class="flex items-center cursor-pointer">
        <rightArrow/>
        <rightArrow class="transform translate-x-4 rotate-180"/>
        <span class=" text-blue-700 text-sm translate-x-4">مشاهده همه</span>
    </NuxtLink>
</template>

<script setup>
import rightArrow from './iconsComponents/rightArrow.vue';

let props = defineProps(['toAddress'])
</script>