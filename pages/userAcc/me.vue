<template>
    <section class="w-full px-2 md:px-0 bg-white pt-10">
        <div class="contentSize flex flex-col justify-start items-start">
            <!-- profile info -->
             <div class="flex gap-4">
                <figure class="w-40 h-40 rounded-full profile-pic-bg p-1"></figure>
                <div class="pt-2">
                    <h3 class="font-semibold sm:text-lg text-gray-800">محمد رضا....</h3>
                    <span class="text-sm sm:text-base text-gray-500">53 پروژه</span>
                </div>
             </div>
             <!-- account and projects -->
              <section class="w-full mt-8">
                    <nav class="w-full relative pb-2 border-b-2 border-gray-500">
                        <ul class="flex gap-6 pr-2">
                            <li @click="handleContent('acc')" class="cursor-pointer hover:text-yellow-700 transition-colors duration-300":class="content=='acc'?'text-yellow-700 font-semibold':'text-black'">اکانت</li>
                            <li @click="handleContent('projects')" class="cursor-pointer hover:text-blue-700 transition-colors duration-300" :class="content=='projects'?'text-blue-700 font-semibold':'text-black'">پروژه ها</li>
                        </ul>
                        <div class="h-1 rounded-sm absolute -bottom-[2px] transition-all duration-300" :class="content=='acc'?'w-14 right-0 bg-yellow-700':'w-16 right-14 bg-blue-700'"></div>
                    </nav>
                    <div class="mt-8 pr-2">
                        <UserCompAcc :class="content=='acc'?'block':'hidden'"/>
                        <UserCompProjects :class="content=='projects'?'block':'hidden'"/>
                    </div>
              </section>
        </div>
    </section>
</template>

<script setup>
definePageMeta({
    layout:'admin'
})
let content = ref('acc')
const handleContent = (chosenOption)=>{
    content.value = chosenOption;
}
</script>