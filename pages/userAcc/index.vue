<template>
    <div class="w-full pageHeight flex flex-col items-center gradient_color pt-20">
        <div class="w-[310px] flex justify-start">
            <NuxtLink class="bg-yellow-800 px-2 py-1 rounded-md flex items-center gap-1 text-yellow-400" to="/">
            <span class="">
                خروج
            </span>
            <span>
                <loginIcon :iconColor="'#facc15'"/>
            </span>
        </NuxtLink>
        </div>
        <form @submit.prevent="handleUser()" class="mt-2 h-fit shadow-md shadow-gray-900 bg-gray-100 rounded-md p-2 flex flex-col gap-3">
            <input class="w-[300px] border-2 border-gray-400 p-1 rounded-md" type="text" name="username" placeholder="شماره دانشجویی">
            <input class="w-[300px] border-2 border-gray-400 p-1 rounded-md" type="password" name="password" placeholder="پسوورد">
            <button class="w-full p-1 rounded-md text-center bg-blue-800 hover:bg-blue-500 transition-colors duration-300 text-gray-100" type="submit">
                ورود
            </button>
        </form>
    </div>
</template>

<script setup>
import loginIcon from '~/components/iconsComponents/loginIcon.vue';
definePageMeta({
    layout:'admin'
})
const router = useRouter()
const handleUser = ()=>{
    router.push('/userAcc/me')
}
</script>

<style scoped>
.pageHeight {
    height: 100vh;
}
</style>