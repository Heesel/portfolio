<template>
    <nav aria-label="navigation" class="container mx-auto flex max-w-screen-2xl items-center justify-between p-4">
        <a aria-label="logo" href="/" class="inline-flex h-10 w-10 items-center justify-center rounded-lg">
            <span class="sr-only">Logo</span>
            👋
        </a>

        <ul class="flex items-center gap-2 text-sm font-medium text-white">

            <li class="rounded-lg px-3 py-2 hover:text-green-500 ease-in duration-200 hover:cursor-pointer" @click="scrollToSection('projects')" aria-label="projects"> Projects</li>

            <li class="rounded-lg px-3 py-2 hover:text-green-500 ease-in duration-200 hover:cursor-pointer" @click="scrollToSection('about')" aria-label="about"> About</li>

            <li class="rounded-lg px-3 py-2 hover:text-green-500 ease-in duration-200 hover:cursor-pointer" @click="scrollToSection('contact')" aria-label="contact"> Contact</li>

        </ul>
    </nav>
</template>
<script setup lang="ts">

function scrollToSection(id: string) {
    const section = document.getElementById(id)
    section!.scrollIntoView({behavior: "smooth"});
}

</script>