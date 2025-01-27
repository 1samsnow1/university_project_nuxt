<template>
    <section class="min-h-svh contentSize my-10 px-2">
        <div class="w-full bg-gray-100 p-3 rounded-tl-3xl rounded-br-3xl shadow-md shadow-gray-500">
            <article class="">
            <div class="w-full border-b-2 pb-1 border-blue-700">
                <h2 class="font-bold text-lg sm:text-xl text-blue-700">درباره ما</h2>
            </div>

            <figure class="lg:w-full max-w-xl sm:max-w-3xl mx-auto my-4 relative shadow-md shadow-gray-900 rounded-xl overflow-hidden">
                <img class="w-full lg:h-full" src="@/assets/images/engineerHQ.jpg" alt="lab_img">
                <div class="absolute w-full h-full top-0 left-0 bg-gray-900 bg-opacity-20"></div>
            </figure>
            <p class="text-xs sm:text-base text-gray-700 text-justify leading-6 sm:leading-8">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
        </article>
        <section class="mt-4">
            <div class="w-full border-b-2 pb-1 border-gray-500">
                <h3 class="leaf-title translate-x-2 text-gray-100 text-xl px-4 bg-gradient-to-tr from-gray-800 to-blue-300">اعضا</h3>
            </div>
            <div class="bg-gray-100 mt-6 px-3 py-2 flex items-center gap-6 overflow-x-scroll scrollDirection darkScrollBar rounded-md">
                <Member v-for="i in 2"/>
            </div>
        </section>
        </div>
    </section>
</template>

<script setup>
</script>