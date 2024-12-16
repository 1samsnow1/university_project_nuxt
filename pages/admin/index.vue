<template>
    <form class="w-full pageHeight gradient_color flex justify-center items-center" @submit.prevent="checkinfo">

        <div class="w-10/12 sm:w-96 p-2 bg-gradient-to-tr from-blue-950 via-blue-600 to-yellow-400 rounded-md flex flex-col items-center gap-3">
            <span class="w-full text-center p-1 bg-red-600 text-gray-100 rounded-md" v-if="err">{{ err }}</span>
            <input type="text" class="w-full rounded-md p-1 bg-gray-100" placeholder="نام ادیمن" v-model="username" name="username">
            <input type="password"class="w-full rounded-md p-1 bg-gray-100" placeholder="پسوورد" v-model="password" name="username">
            <button type="submit" class="formButton w-full">
                ورود
            </button>
            <button @click="goHome" class="formButton w-full">
                بازگشت به خانه
            </button>
        </div>
    </form>
</template>

<script setup>
definePageMeta({
    layout: 'admin'
})
const username = ref('');
const password = ref('');
const err = ref(null)
const checkinfo = ()=>{
    if(username.value == 'admin53',password.value == 'admin53'){
       router.push('/admin/panel');
    }else {
        err.value = 'رمز یا پسوورد اشتباه است';
    }
}

const router = useRouter();
const goHome = ()=>{
    router.push('/')
}
</script>