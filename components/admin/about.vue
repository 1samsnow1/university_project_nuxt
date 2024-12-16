<template>
    <section class="min-w-[280px] mr-3 sm:min-w-[400px] sm:mr-0 md:min-w-[700px] lg:min-w-[900px]">
        <form class="admin_form_style p-2 rounded-md bg-gray-100" @submit.prevent="" action="">
        <img class="w-60 h-60 sm:w-80 sm:h-72 rounded-md mx-auto shadow-md shadow-gray-800" src="@/assets/images/engineer.jpg" alt="aboutImage">
        <input class="admin_input_styles" type="text" v-model="contentPictureLink" name="file" placeholder="لینک عکس درباره ما">
        <textarea
         name="text"
         ref="textArea"
         @input="resizeTextarea"
         v-model="aboutText"
         class="admin_textArea_styles" 
         placeholder="جزییات درباره ما"></textarea>
         <button class="formButton">ویرایش</button>
    </form>
    </section>
</template>

<script setup>

let aboutText = ref('');
let textArea = ref(null);
let contentPictureLink = ref(null);

const resizeTextarea = () => {
    const el = textArea.value;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
};
onMounted(()=>{
    const resizeTextarea = () => {
    const el = textArea.value;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
};
resizeTextarea();
})
</script>