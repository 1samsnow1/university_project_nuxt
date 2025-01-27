<template>
    <section class="w-full">
        <div class="contentSize px-3 sm:px-0 flex flex-col justify-center items-start translate-y-10">
            <span class="w-8 h-1 mb-2 bg-yellow-500 rounded-full"></span>
            <span class="w-4/5 h-20 sm:text-lg text-gray-200 text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            </span>
        </div>
        <figure class="contentSize h-60 sm:h-80 flex justify-end">
            <img class="md:w-[28rem] md:h-[28rem] w-60 h-60 sm:w-80 sm:h-80 sm:-translate-y-8 md:-translate-y-28 sm:-translate-x-10 wireImg" src="../../assets/images/wireFromBtoT.png" alt="wireImg">
        </figure>
    </section>
</template>

<script setup>

onMounted(()=>{
    const wireImg = document.querySelector('.wireImg');
    const loaded = ()=>{
        wireImg.classList.add('loaded')
    }
    if(wireImg.complete){
        loaded();
    }else {
        wireImg.addEventListener("load",loaded);
    }
})
</script>

<style scoped>
.wireImg {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
}
.wireImg.loaded {
    opacity: 1;
}
</style>