<template>
    <form class="w-full pageHeight gradient_color flex justify-center items-center" @submit.prevent="">

        <div class="w-10/12 sm:w-96 p-2 bg-gradient-to-tr from-blue-950 via-blue-600 to-yellow-400 rounded-md flex flex-col items-center gap-3">
            <span class="w-full text-center p-1 bg-red-600 text-gray-100 rounded-md" v-if="err">{{ err }}</span>
            <input type="text" autocomplete="username" class="w-full rounded-md p-1 bg-gray-100" placeholder="نام ادیمن" v-model="adminName" name="username">
            <input type="text" class="w-full rounded-md p-1 bg-gray-100" placeholder="پسوورد" v-model="pw" name="pw">
            <loader v-if="loaderStatus"/>
            <button v-else @click="checkinfo()" type="button" class="formButton w-full">
                ورود
            </button>
            <button @click="goHome" class="formButton w-full">
                بازگشت به خانه
            </button>
        </div>
    </form>
</template>

<script setup>
import loader from '~/components/iconsComponents/loader.vue';
definePageMeta({
    layout: 'bare-layout'
})
const adminName = ref('');
const pw = ref('');
const err = ref(null);
const loaderStatus = ref(false);
const checkinfo = async ()=>{
    let userToken = useCookie('userToken');
    let adminLoginStatus = useCookie('adminLoginStatus');
    loaderStatus.value = true;
    const loginData = await $fetch("https://resume.bargh-saman.ir/api/login",{
        method: 'POST',
        body :{
            "username" : adminName.value,
            "password" : pw.value
        }
    });
    loaderStatus.value = false;
    console.log(loginData["access token"]);
    if(loginData){
        userToken.value = loginData["access token"];
        adminLoginStatus.value = "logedIn";
        adminName.value = "";
        pw.value = "";
        router.push("/admin/panel");
    }
}

const router = useRouter();
const goHome = ()=>{
    router.push('/')
}
</script>