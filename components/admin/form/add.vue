<template>
    <form @submit.prevent="" class="admin_form_style min-w-[300px] sm:w-[580px] p-2 mb-10 rounded-md bg-gray-100">
        <input type="file" ref="contentPic" accept="image/*" id="profilePic" class="hidden" @change="showImage">
        <label v-if="!newsPicture" for="profilePic" class="w-full h-24 grid content-center text-center rounded text-gray-200 bg-blue-950 hover:bg-blue-900 cursor-pointer active:scale-90">آپلود عکس+</label>
        <label v-else for="profilePic" class="w-full h-fit grid content-center text-center rounded text-gray-100 gradient_color cursor-pointer active:scale-90"><img class="w-full rounded" :src="newsPicture" alt="عکس پروفایل"></label>
        <p v-if="errMessage" class="text-red-600">{{ errMessage }}</p>
        <input v-model="title" class="admin_input_styles font-bold" placeholder="تایتل" type="text" name="title">
        <input v-if="panelName=='news'" type="text" v-model="summary" class="admin_input_styles" placeholder="خلاصه">

        <input v-if="panelName=='members'" v-model="memberDegree" class="admin_input_styles" placeholder="مدارک عضو" type="text" name="title">
        <input v-if="panelName=='members'" v-model="memberAchievment" class="admin_input_styles" placeholder="دستاورد عضو" type="text" name="title">

        <textarea
         name="text"
         ref="textArea"
         @input="resizeTextarea"
         v-model="newsText"
         class="admin_textArea_styles" 
         placeholder="متن و جزییات"></textarea>

        <p v-if="addCounter>0 && panelName=='news'" class="text-green-600">{{ addCounter }} خبر اضافه شد </p>
        <p v-if="addCounter>0 && panelName=='products'" class="text-green-600">{{ addCounter }} پروژه اضافه شد </p>
        <p v-if="addCounter>0 && panelName=='members'" class="text-green-600">{{ addCounter }} عضو اضافه شد</p>
        <button @click="addContent()" class="formButton">{{ loadingStatus }}</button>
        <button @click="showList" class="formButton">بازگشت به لیست</button>
    </form>
</template>

<script setup>
const emit = defineEmits();
const props = defineProps(['panelName'])
let newsPicture = ref(null);
function showImage (event) {
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = (e)=>{
            newsPicture.value = e.target.result;
        };
        reader.readAsDataURL(file);
    };
}


let textArea = ref(null);
const resizeTextarea = () => {
    const refTextArea = textArea.value;
    refTextArea.style.height = "auto";
    refTextArea.style.height = `${refTextArea.scrollHeight}px`;
};
const showList = ()=>{
    emit('changeForm','list');
}
// add functions and variables
let adminToken = useCookie("userToken").value;
let addCounter = ref(0);
let loadingStatus = ref("افزودن");

let errMessage = ref(null);
let memberDegree = ref(''); // this is only for members
let memberAchievment = ref(''); // this is only for members
let title = ref(null);
let newsText = ref(null);
let summary = ref(null);
let contentPic = ref(null);
const addContent = async ()=>{
    // console.log(contentPic.value.files[0]);
    
    loadingStatus.value = "درحال پردازش...";
    if(props.panelName == "news"){

        if(!title.value){
        return errMessage.value = "تایتل الزامی است";
    }else if (!summary.value || summary.value.length < 5){
        return errMessage.value = "خلاصه محتوا الزامی است و باید بیش از 5 کاراکتر باشد";
    }else if (!newsText.value || newsText.value.length < 5){
        return errMessage.value = "جزییات لزامی است و باید بیش از 5 کاراکتر باشد";
    }
        let fd = new FormData();
    fd.append("image",contentPic.value.files[0]);
    fd.append("title",title.value);
    fd.append("summary",summary.value);
    fd.append("description",newsText.value);
    const {data, error} = await $fetch("https://resume.bargh-saman.ir/api/NewsManagement/news/create",{
        method: 'POST',
        body : fd,
        headers: {
            Authorization: `Bearer ${adminToken}`,
        },
    })
    if(error){
        loadingStatus.value = "افزودن";
        return errMessage.value = "پروسه با مشکل غیرمنتظره مواجه شد";
    }
    addCounter.value++;
    loadingStatus.value = "افزودن";
    }else if(props.panelName == "products"){

        if(!title.value){
            return errMessage.value = "تایتل الزامی است";
        }else if (!newsText.value || newsText.value.length < 5){
            return errMessage.value = "جزییات لزامی است و باید بیش از 5 کاراکتر باشد";
        }

        let fd = new FormData();
        fd.append("image",contentPic.value.files[0]);
        fd.append("name",title.value);
        fd.append("discription",newsText.value);
        fd.append("price","877");
        const {data, error} = await $fetch("https://resume.bargh-saman.ir/api/ProductManagement/product/create",{
            method: 'POST',
            body : fd,
            headers: {
                Authorization: `Bearer ${adminToken}`,
            },
        })
        if(error){
            loadingStatus.value = "افزودن";
            return errMessage.value = "پروسه با مشکل غیرمنتظره مواجه شد";
        }
        addCounter.value++;
        loadingStatus.value = "افزودن";
    }
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