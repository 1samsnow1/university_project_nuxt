<template>
    <form class="w-full flex flex-col gap-2 mb-10" @submit.prevent="changeAccInfo">
        <input type="file" accept="image/*" id="profilePic" class="hidden" @change="showImage">
        <label v-if="!profilePicture" for="profilePic" class="w-20 h-20 grid content-center text-center rounded-full text-gray-100 gradient_color cursor-pointer active:scale-90">آپلود عکس</label>
        <label v-else for="profilePic" class="w-20 h-20 grid content-center text-center rounded-full text-gray-100 gradient_color cursor-pointer active:scale-90"><img class="w-20 h-20 rounded-full" :src="profilePicture" alt="عکس پروفایل"></label>

        <p class="font-semibold text-lg">تغییر رمز</p>
        <input class="w-[300px] shadow-sm shadow-gray-300 p-1 placeholder:text-gray-600" type="password" name="passowrd" placeholder="پسوورد">
        <input class="w-[300px] shadow-sm shadow-gray-300 p-1 placeholder:text-gray-600" type="password" placeholder="تکرار پسوورد">
        <button class="w-[300px] text-gray-100 bg-blue-700 hover:bg-blue-500 rounded-sm p-1">ثبت</button>
    </form>
</template>

<script setup>
let profilePicture = ref(null);
function showImage (event) {
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = (e)=>{
            profilePicture.value = e.target.result;
        };
        reader.readAsDataURL(file);
    };
}
const changeAccInfo = ()=>{
    console.log(profilePicture.value.files[0]);
}
</script>