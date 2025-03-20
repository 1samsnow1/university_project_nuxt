<template>
    <div class="min-w-44 sm:min-w-52 max-w-52 lg:min-w-80 lg:max-w-80  group p-2 cursor-pointer animate-pulse">
        <div class="w-full h-40 lg:h-52 rounded-md bg-gray-300">                
        </div>
        <div class="contentz">
            <div class="w-20 h-2 mb-2 mt-1 bg-gray-300 rounded"></div>
            <div class="w-28 h-6 mt-1 mb-2 bg-gray-300 rounded"></div>
            <div class="w-full h-4 mt-2 mb-1 bg-gray-300 rounded"></div>
            <div class="w-4/5 h-4 bg-gray-300 rounded"></div>     
            <div class="w-24 h-6 mt-2 bg-gray-300 rounded-full"></div>
        </div>
    </div>
</template>

<style scoped>
.grayColor {
    background-repeat: no-repeat;
    background-image: linear-gradient(90deg,#6b7280,#6b7280,#c4c7cd,#6b7280);
    animation: bgColor 3s linear infinite;
}
@keyframes grayAnimation {
    0%{
      background-size: 0% 100%;
  }
  100%{
      background-size: 500% 100%;
  }
}
</style>