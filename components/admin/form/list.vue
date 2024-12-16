<template>
    <div class="p-2 rounded-md min-w-[240px] sm:min-w-[400px] max-w-xl mx-auto bg-gray-100">
        <ul class="flex flex-col gap-1">
            <li v-for="item in listView" class="w-full flex items-center justify-between bg-gray-800 py-1 px-3 text-xs sm:text-sm md:text-base rounded-lg">
                <!-- info -->
                <div class="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 ml-1 sm:ml-2">
                    <div>
                        <span class="text-gray-100">{{ item.name }}</span>
                    </div>
                    <div>
                        <span class="text-gray-300 ml-1">ای دی:</span>
                        <span  class="text-gray-100">{{ item.id }}</span>
                    </div>
                </div>

                <!-- buttons -->
                <div class="flex items-start gap-4 sm:gap-2">
                    <button @click="goToEdit(item.id)" class="p-1 bg-gray-300 bg-opacity-0 hover:bg-opacity-50">
                        <pen/>
                    </button>
        
                    <button @click="deleteProduct(item.id)" class=" bg-gray-300 bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 text-red-600">
                        <trashCan/>
                    </button>
                </div>
            </li>
        </ul>
        <div class="flex justify-start mt-2 group">
            <button @click="changeForm('add')" class="p-1 px-4 shortHoverTransition lg:group-hover:bg-orange-600 rounded-full">+ افزودن</button>
        </div>
        </div>
</template>

<script setup>
import pen from '~/components/iconsComponents/pen.vue';
import trashCan from '~/components/iconsComponents/trashCan.vue';

const props = defineProps(['listView']);

const emit = defineEmits();

const changeForm = ()=>{
    emit('changeForm','add');
}
const goToEdit = (newsId)=>{
    emit('goToEdit','edit',newsId);
}
</script>