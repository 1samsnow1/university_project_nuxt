<template>
    <section>
        <div v-if="panelStatus=='list'" class="p-2 rounded-md min-w-[240px] sm:min-w-[400px] max-w-xl mx-auto bg-gray-100">
            <loader v-if="!newsList"/>
            <p v-if="newsList && newsList.length == 0" class="text-red-600 text-center">خبری موجود نیست</p>
            <ul v-else class="flex flex-col gap-1">
                <li v-if="newsList" v-for="item in newsList" class="w-full flex items-center justify-between bg-gray-800 py-1 px-3 text-xs sm:text-sm md:text-base rounded-lg">
                    <!-- info -->
                    <div class="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 ml-1 sm:ml-2">
                        <div class="">
                            <span class="text-gray-100 max-w-[260px] overflow-hidden overflow-ellipsis line-clamp-1">{{item.title}}</span>
                        </div>
                        <div>
                            <span class="text-gray-300 ml-1">ای دی:</span>
                            <span  class="text-gray-100">{{item.id}}</span>
                        </div>
                    </div>

                    <!-- buttons -->
                    <div class="flex items-start gap-4 sm:gap-2">
                        <button @click="goToEdit()" class="p-1 bg-gray-300 bg-opacity-0 hover:bg-opacity-50">
                            <pen/>
                        </button>
        
                        <button @click="deleteProduct(item.id)" class=" bg-gray-300 bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 text-red-600">
                            <trashLoader v-if="trashLoaderStatus"/>
                            <trashCan v-else/>
                        </button>
                    </div>
                </li>
            </ul>
            <div class="flex justify-start mt-2 group">
                <button @click="changeForm('add')" class="p-1 px-4 shortHoverTransition lg:group-hover:bg-orange-600 rounded-full">+ افزودن</button>
            </div>
        </div>
        <AdminFormAdd v-if="panelStatus=='add'" :panelName="'news'" @changeForm="changeForm"/>
    </section>
</template>

<script setup>
import pen from '~/components/iconsComponents/pen.vue';
import trashCan from '~/components/iconsComponents/trashCan.vue';
import loader from '~/components/iconsComponents/loader.vue';
import trashLoader from '~/components/iconsComponents/trashLoader.vue';
let newsList = ref(null);
const fetchNewsList = async ()=>{
    const { data } = await useFetch('https://resume.bargh-saman.ir/api/news');
    newsList.value = data.value || []; // Update reactive state
}
fetchNewsList();

let panelStatus = ref("list");

const changeForm = async (value)=>{
    panelStatus.value = value;
    if (value=='list'){
       await fetchNewsList();
    }
}

const goToEdit = (newsId)=>{
    // emit('goToEdit','edit',newsId);
}

let trashLoaderStatus = ref(false);
const deleteProduct = async (id)=>{
    try {
        trashLoaderStatus.value = true;
        const deletep = await $fetch(`https://resume.bargh-saman.ir/api/NewsManagement/news/${id}`,{
            method:'DELETE',
            headers:{
                Authorization: `Bearer ${useCookie("userToken").value}`,
            }
        })
        await fetchNewsList();
    } catch(error) {
        console.error('Error deleting product:', error);
    }finally {
        trashLoaderStatus.value = false;
    }
}
</script>