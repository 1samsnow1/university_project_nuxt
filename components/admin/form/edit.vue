<template>
    <section class="w-full my-4 p-2 rounded-md bg-gray-100">
        <figure class="w-4/5 mx-auto">
            <img class="w-full max-h-72" src="@/assets/images/mapIcon.png" alt="newsImage">
        </figure>
        <form @submit.prevent="" class="admin_form_style">
            <input v-model="title" class="admin_input_styles font-bold" placeholder="تایتل خبر" type="text" name="title">
            <input v-if="panelName=='member'" v-model="memberDegree" class="admin_input_styles" placeholder="مدارک عضو" type="text" name="title">
            <input v-if="panelName=='member'" v-model="memberAchievment" class="admin_input_styles" placeholder="دستاورد عضو" type="text" name="title">
            <textarea
            name="text"
            ref="textArea"
            @input="resizeTextarea"
            v-model="contentText"
            class="news_textArea_styles" 
            placeholder="متن خبر"></textarea>
            <input class="admin_input_styles" v-model="contentPictureLink" type="text" name="file" placeholder="لینک عکس یا فایل مورد نظر">
            <button class="formButton">ویرایش</button>
            <button @click="showList" class="formButton">بازگشت به لیست</button>
        </form>
    </section>
</template>

<script setup>

const emit = defineEmits();
const props = defineProps(['panelName']);


let title = ref('تایتل خبر');
let contentText = ref('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.');
let contentPictureLink = ref(null);

let memberDegree = ref('مدارک عضو'); // this is only for members
let memberAchievment = ref('دستاورد های عضو'); // this is only for members

let textArea = ref(null);
const resizeTextarea = () => {
    const el = textArea.value;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
};
const showList = ()=>{
    emit('changeForm','list');
}

onMounted(()=>{
    const resizeTextarea = () => {
    const el = textArea.value;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
};
resizeTextarea();
})
</script>