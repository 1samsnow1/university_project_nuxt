<template>
    <div>
        <header class="w-full gradient_color shadow-sm shadow-gray-700">
            <div class="w-full headerz fixed top-0 shortHoverTransition" :class="isScrolled?'scrolled':'z-50'">
                <div class="contentSize flex justify-between px-3 sm:px-0 translate-y-2 lg:pb-0">
                    <HeaderNavbar :class="isScrolled?'mt-0':'mt-5'" class="hidden shortHoverTransition lg:block pb-4"/>
                    <HeaderMobilieNav @toggleBg="toggleBg" class="lg:hidden shortHoverTransition z-50"/>
                    <HeaderLogo :class="isScrolled?'-translate-y-1 lg:-translate-y-0':'lg:-translate-y-1'" class="shortHoverTransition z-0"/>
                </div>
            </div>
            <HeaderBanner class="pt-20"/>
        </header>
        <main class="">
            <div :class="menuStatus?'darkGlass fixed top-0 left-0':''" class="shortHoverTransition"></div>
            <slot/>
        </main>
        <footer>
            <LazyPageFooter/>
        </footer>
    </div>
</template>

<script setup>


let isScrolled = ref(false);
const handleScroll = ()=>{
    isScrolled.value = window.scrollY > 0;
}

let menuStatus = ref(false)
const toggleBg = ()=>{
    menuStatus.value = !menuStatus.value;
}
onMounted(()=>{
    window.addEventListener('scroll',handleScroll);
    handleScroll();
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.headerz {
    z-index: 1000;
}
.scrolled {
    z-index: 1000;
    /* -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px); */
    @apply py-1 border-b border-gray-900 bg-gradient-to-tr from-blue-950 via-blue-600 via-80% to-yellow-400;
}
.darkGlass {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 800;
}
</style>