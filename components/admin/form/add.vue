<template>
    <form @submit.prevent="" class="admin_form_style p-2 rounded-md bg-gray-100">
        <input v-model="title" class="admin_input_styles font-bold" placeholder="تایتل یا نام" type="text" name="title">

        <input v-if="panelName=='member'" v-model="memberDegree" class="admin_input_styles" placeholder="مدارک عضو" type="text" name="title">

        <input v-if="panelName=='member'" v-model="memberAchievment" class="admin_input_styles" placeholder="دستاورد عضو" type="text" name="title">

        <textarea
         name="text"
         ref="textArea"
         @input="resizeTextarea"
         v-model="newsText"
         class="admin_textArea_styles" 
         placeholder="متن یا جزییات"></textarea>

        <input class="admin_input_styles" type="text" v-model="contentPictureLink" name="file" placeholder="لینک عکس یا فایل مورد نظر">

        <button class="formButton">افزودن</button>
        <button @click="showList" class="formButton">بازگشت به لیست</button>
    </form>
</template>

<script setup>
const emit = defineEmits();
const props = defineProps(['panelName'])
let title = ref('');
let newsText = ref('');
let textArea = ref(null);
let contentPictureLink = ref(null);

let memberDegree = ref(''); // this is only for members
let memberAchievment = ref(''); // this is only for members

const resizeTextarea = () => {
    const refTextArea = textArea.value;
    refTextArea.style.height = "auto";
    refTextArea.style.height = `${refTextArea.scrollHeight}px`;
};
const showList = ()=>{
    emit('changeForm','list');
}

onMounted(()=>{
    const resizeTextarea = () => {
    const refTextArea = textArea.value;
    refTextArea.style.height = "auto";
    refTextArea.style.height = `${refTextArea.scrollHeight}px`;
};
resizeTextarea();
})
</script>

<style scoped>
textarea {
  transition: height 0.2s ease;
}
</style>