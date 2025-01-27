<template>
    <section class="w-full flex flex-col gap-4 mb-10">
        <div class="relative">

            <div class="flex gap-4 flex-wrap">
                <!-- projects cards -->
                 <div @click="openEditForm()" class="cursor-pointer group relative shadow-sm shadow-gray-400 rounded-md p-1" v-for="i in 4">
                    <div class="w-full h-full rounded-md text-center text-lg text-gray-100 pt-20 bg-gray-900 opacity-0 group-hover:opacity-80 absolute top-0 right-0 shortHoverTransition">
                        مشاهده
                    </div>
                    <figure class="w-48 h-48">
                        <img class="w-full h-full rounded-md " src="@/assets/images/lampImage.jpg" alt="نام پروژه">
                    </figure>
                    <h3 class="font-semibold p-1">نام پروژه</h3>
                 </div>
            </div>
            <!-- project edit form -->
            <div v-if="editForm" class="w-full flex flex-col items-center absolute top-0 left-0 bg-gray-900 backdrop-blur-sm rounded-md p-2 bg-opacity-70">
                <form class="flex flex-col gap-4 p-4 bg-gray-100 rounded-md" submit.prevent="">
                    <button @click="closeEditForm()" class="w-fit px-3 py-1 rounded-md hover:bg-yellow-600 bg-yellow-800 text-gray-100">بازگشت</button>
                    <img class=" w-96 h-52 rounded-md " src="@/assets/images/lampImage.jpg" alt="نام پروژه">
                    <input type="file" placeholder="عکس پروژه">
                    <input class="shadow-sm shadow-gray-400 p-1 placeholder:text-gray-600" type="text" name="projectname" placeholder="نام پروژه">
                    <textarea
                    
                        name="text"
                        ref="textArea"
                        @input="resizeTextarea"
                        class="admin_textArea_styles placeholder:text-gray-600" 
                        placeholder="متن یا جزییات"></textarea>
                        <button class="w-full rounded-md bg-blue-900 hover:bg-blue-600 text-gray-100 p-1">ثبت ویرایش</button>
                </form>
            </div>
        </div>
        <!-- add projects -->
        <div class="mb-12">
            <h3 class="font-semibold text-lg mt-2 mb-4 px-3 py-1">+ افزودن پروژه</h3>
            <form class="w-[300px] sm:w-[600px] flex flex-col gap-4 p-4 bg-gray-100 rounded-md" submit.prevent="">
                     
                    <input type="file" id="projectPic" class="hidden" @change="showImage">
                    <label id="imgUpload" for="projectPic" class="w-72 sm:w-full h-44 sm:h-60 grid content-center text-center rounded text-gray-100 gradient_color cursor-pointer active:scale-90">آپلود عکس</label>
                    <label id="uploadedImg" for="projectPic" class="w-72 sm:w-full h-44 sm:h-60 grid content-center text-center rounded text-gray-100 gradient_color cursor-pointer active:scale-90" style="display: none;"><img class="w-full h-full rounded" id="imgPreview" src="" alt="عکس پروفایل"></label>


                    <input class="shadow-sm shadow-gray-400 p-1 placeholder:text-gray-600" type="text" name="projectname" placeholder="نام پروژه">
                    <textarea
                    
                        name="text"
                        ref="textArea2"
                        @input="resizeTextarea2"
                        class="admin_textArea_styles placeholder:text-gray-600 bg-white" 
                        placeholder="متن یا جزییات"></textarea>
                        <button class="w-full rounded-md bg-blue-900 hover:bg-blue-600 text-gray-100 p-1">+ افزودن</button>
                </form>
        </div>
    </section>
</template>
<script setup>
// project image
let projectPicture = ref(null);
function showImage (event) {
    let imgUpload = document.querySelector('#imgUpload')
    let uploadedImgLable = document.querySelector('#uploadedImg');
    let imgPreview = document.querySelector('#imgPreview');
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = (e)=>{
            projectPicture.value = e.target.result;
            imgPreview.src = e.target.result;
            uploadedImgLable.style.display = "block";
            imgUpload.style.display = "none";
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
let textArea2 = ref(null);
const resizeTextarea2 = () => {
    const refTextArea = textArea2.value;
    refTextArea.style.height = "auto";
    refTextArea.style.height = `${refTextArea.scrollHeight}px`;
};
const editForm = ref(false);
const openEditForm = ()=>{
    editForm.value = true;
}
const closeEditForm = ()=>{
    editForm.value = false;
}
</script>

<style scoped>
</style>