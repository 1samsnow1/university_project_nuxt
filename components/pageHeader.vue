<template>
    <section class="w-full gradient_color shadow-sm shadow-gray-700">
        <div class="contentSize px-3 sm:px-0 animate-expandNavBar flex justify-end pt-4 pb-2 lg:pb-0 items-center">
            <HeaderLogo/>
        </div>
        <div class="contentSize">
            <HeaderNavbar class="hidden animate-expandNavBar lg:block translate-x-4 pb-4"/>
        </div>
        <HeaderMobilieNav class="lg:hidden"/>
    </section>
</template>

<script setup>
</script>