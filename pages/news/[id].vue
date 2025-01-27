<template>
    <section class="contentSize my-6">
        <figure class="w-full h-60 md:h-96 xl:h-[30rem] relative p-1">
            <img class="w-full h-full rounded-md absolute top-0 left-0 img2" src="@/assets/images/engineer.jpg" alt="news_image">
            <img class="w-full h-full rounded-md absolute top-0 left-0 img shadow-md shadow-gray-600" src="@/assets/images/engineerHQ.jpg" alt="news_image">
        </figure>
        <div class="w-[90%] mx-auto bg-white -translate-y-20 p-2 px-4 rounded-md shadow-md shadow-gray-300">
            <span class="w-full text-xs lg:text-sm text-right text-gray-500">1401/09/02</span>
            <h2 class="w-full titrFont text-slate-800 text-right font-bold text-lg lg:text-2xl">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </h2>
            <p class="mt-4 mx-auto text-justify text-gray-500 text-xs sm:text-base leading-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
        </div>
    </section>
</template>

<script setup>

onMounted(()=>{
    const img = document.querySelector('.img');
    const img2 = document.querySelector('.img2');
    const loaded = ()=>{
        img.classList.add('loaded');
        img2.classList.add('loaded');
    }
    if(img.complete){
        loaded();
    }else {
        img.addEventListener("load",loaded);
    }
})
</script>

<style scoped>
.img {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
}
.img.loaded {
    opacity: 1;
}
.img2 {
    @apply blur-sm;
}
.img2.loaded{
    @apply blur-none;
}
</style>