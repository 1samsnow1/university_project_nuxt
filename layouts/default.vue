<template>
    <div>
        <header class="sticky top-0 headerz">
            <div class="w-full gradient_color headerz pb-2 shortHoverTransition">
                <div class="contentSize flex justify-between items-center px-3 sm:px-0 translate-y-2 lg:pb-0">
                    <HeaderNavbar class="hidden -translate-y-1 shortHoverTransition md:block"/>
                    <HeaderMobilieNav @toggleBg="toggleBg" class="md:hidden shortHoverTransition z-50"/>
                    <HeaderLogo class="shortHoverTransition z-0"/>
                </div>
            </div>
        </header>
        <main>
            <div :class="menuStatus?'darkGlass fixed top-0 left-0':''" class="shortHoverTransition"></div>
            <slot/>
        </main>
        <footer>
            <PageFooter/>
        </footer>
    </div>
</template>

<script setup>
let menuStatus = ref(false)
const toggleBg = ()=>{
    menuStatus.value = !menuStatus.value;
}
</script>

<style scoped>
.headerz {
    z-index: 1000;
}
.darkGlass {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 800;
}
</style>