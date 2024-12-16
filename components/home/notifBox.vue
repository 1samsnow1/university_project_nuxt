<template>
    <section>
        <div class="w-full flex justify-start border-b-2 border-emerald-600 mb-10">
            <h2 class="px-3 bg-emerald-600 text-gray-100 rounded-2xl rounded-tl-3xl rounded-bl-none rounded-tr-none text-lg">
                اعلامیه ها
            </h2>
        </div>
        <div class="flex flex-col items-center gap-4">
            <HomeNotif class="notify opacity-0" v-for="i in 4"/>
        </div>
        <ToProductBtn :toAddress="'./'"/>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
      if(entry.intersectionRatio>0){
        entry.target.classList += ' animate-showContent';
        observer.unobserve(entry.target);
      }
    });
  },{
    rootMargin: '70% 0px 20% 0px'
  }
)
  let notificationArticle = document.querySelectorAll('.notify');
  notificationArticle.forEach((article)=>{
    observer.observe(article);
  })
})
</script>