<template>
<svg width="23px" height="25px" viewBox="0 0 20.00 20.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="2">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.12"/>

<g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/> </g>

</svg>
</template>

<script setup>
let isScrolled = ref(false);
const handleScroll = ()=>{
    isScrolled.value = window.scrollY > 0;
}

onMounted(()=>{
    window.addEventListener('scroll',handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>