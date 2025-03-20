<template>
    <NuxtLink to="./">
        <article class="flex flex-col justify-center items-center gap-4">
            <figure class="w-28 h-28 sm:w-32 sm:h-32 darkBgAnimation rounded-full bg-gray-700"></figure>
            <span class="w-full text-sm sm:text-base text-center text-yellow-700">{{ user.name + ' ' + user.family_name }}</span>
        </article>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['user'])

</script>

<style scoped>
.darkBgAnimation {
    background-repeat: no-repeat;
    background-image: linear-gradient(#374151,#374151,#6b7280,#374151);
    animation: movingBg 3s infinite;
}
@keyframes movingBg {
    0%{
        background-size: 100% 0%; 
    }
    100%{ 
        background-size: 100% 500%;
    }
}
</style>