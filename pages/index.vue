<template>
    <section>
        <div class="container max-w-screen-2xl mx-auto grid grid-cols-2 gap-8 lg:gap-24 md:items-center py-12 lg:py-20 p-4">
            <div class="col-span-2 md:col-span-1 order-2 md:order-1">
                <h1 class="text-2xl sm:text-3xl lg:text-4xl text-white font-medium mb-6">Hey, I'm <span class="text-green-500">Hessel</span> - a detail-oriented <span class="text-green-500">web developer</span> with a passion</h1>
                <p class="text-xl text-gray-500 mb-6">Stick around to see some of my work and to get to know me.</p>
                <button @click="scrollToSection('contact')" aria-label="get in touch" class="inline-block bg-green-600 hover:bg-green-700 transition ease-in duration-150 py-4 px-5 lg:px-8 text-white mt-6">Get in touch</button>
            </div>
            <div class="col-span-2 md:col-span-1 flex flex-row space-x-2 order-1 md:order-2 items-center justify-center">
                <img src="/header.svg" alt="e" class="max-w-sm md:max-w-md object-cover px-6" />
            </div>
        </div>
    </section>
    <section class="bg-gray-800 py-20" id="projects">
        <div class="container mx-auto max-w-screen-2xl">
            <div class="flex flex-row items-center gap-3 px-3">
                <div class="w-24 bg-green-600 rounded-full py-0.5 px-6 mb-6"></div>
                <span class="text-lg text-white font-medium mb-6">My Projects</span>
            </div>
            <h2 class="text-3xl text-white font-bold mb-6 px-3">Hand-picked projecs for you to see</h2>
            <div class="flex flex-col lg:flex-row">
                <div class="px-3 lg:px-0">
                    <img class="mb-8 h-full w-full object-cover" src="/klompmaker.webp" width="1024" height="1024" loading="lazy" alt="Klompmaker fietsen"/>
                </div>
                <div class="w-full px-3 md:px-6">
                    <article class="relative h-full px-6 lg:px-12 py-10 bg-gray-600 rounded-lg">
                        <a href="https://www.klompmakerfietsen.nl/" target="_blank" class="mb-1 text-2xl font-bold text-white hover:text-green-500 transition ease-in duration-150 flex items-center">
                            <h3>Klompmaker fietsen</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 mb-3">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                        </a>
                        <div class="flex flex-wrap gap-3 text-gray-900">
                            <span class="bg-yellow-300 px-2 rounded">Javascript</span>
                            <span class="bg-orange-400 px-2 rounded">Svelte</span>
                            <span class="bg-green-400 px-2 rounded">Shopify</span>
                            <span class="bg-teal-300 px-2 rounded">Tailwindcss</span>
                        </div>
                        <div class="mt-6">
                            <p class="mb-12 text-white">
                                Klompmaker Fietsen is een fietsenwinkel gevestigd in Elburg. André, de eigenaar, wou een vernieuwde webshop voor zijn fietsenwinkel. 
                                Deze webshop moest verschillende pagina's bevatten zoals een assortimenten pagina, reparatie pagina en ook een verhuur pagina.</p>
                            <p class="mb-12 text-white">
                                Op de assortiment pagina waar je een aanbod van fietsen kunt bekijken, kun je ook filteren op bijvoorbeeld prijs, merk maar ook de kleur van de fiets. 
                                De webshop is gebouwd in een JavaScript framework genaamd Svelte en is gekoppeld aan Shopify.
                            </p>
                            <div class="flex flex-row items-center gap-3">
                                <div class="w-12 bg-green-500 rounded-full py-0.5 px-6"></div>
                                <a href="https://www.beterbekend.nl/" target="_blank" class="mb-1 text-xl font-bold text-white hover:text-blue-900 transition ease-in duration-150 flex items-center">
                                    <span>Beter bekend</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 mb-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-gray-900 py-20" id="about">
        <div class="container mx-auto max-w-screen-2xl">
            <div class="flex flex-row items-center gap-3 px-3">
                <div class="w-24 bg-green-600 rounded-full py-0.5 px-6 mb-6"></div>
                <span class="text-lg text-white font-medium mb-6">About me</span>
            </div>
            <h3 class="text-3xl text-white font-bold mb-6 px-3">Get a closer look at who I am</h3>
            <div class="mt-24 px-3">
                <div class="flex flex-row items-center gap-3">
                    <div class="w-12 bg-green-600 rounded-full py-0.5 px-6 mb-6"></div>
                    <span class="text-lg text-white font-medium mb-6">Skills & Tools</span>
                </div>
                <div class="flex flex-wrap gap-3 text-gray-900 max-w-xl">
                    <span class="bg-orange-300 px-2 rounded">HTML</span>
                    <span class="bg-teal-300 px-2 rounded">CSS / Tailwindcss</span>
                    <span class="bg-yellow-300 px-2 rounded">Javascript</span>
                    <span class="bg-blue-400 px-2 rounded">Typescript</span>
                    <span class="bg-purple-400 px-2 rounded">PHP</span>
                    <span class="bg-orange-400 px-2 rounded">Svelte</span>
                    <span class="bg-green-500 px-2 rounded">Nuxt</span>
                    <span class="bg-red-400 px-2 rounded">Laravel</span>
                    <span class="bg-green-600 px-2 rounded">Node.js</span>
                </div>
            </div>
            <div class="mt-24 px-3">
                <div class="flex flex-row items-center gap-3">
                    <div class="w-12 bg-green-600 rounded-full py-0.5 px-6 mb-6"></div>
                    <span class="text-lg text-white font-medium mb-6">Who am I</span>
                </div>
                <article>
                    <p class="text-gray-500 max-w-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo vel luctus tincidunt, 
                        velit velit lacinia nulla, vel tincidunt diam sapien non velit. 
                        Vivamus vel nisl at velit ultricies porta. Nam euismod, felis euismod aliquam lacinia, 
                        enim velit tincidunt sapien, auctor gravida nisl velit vel justo. 
                    </p>
                </article>
            </div>
        </div>
    </section>
    <section class="bg-gray-800 py-20" id="contact">
        <div class="container mx-auto max-w-screen-2xl">
            <div class="flex flex-row items-center gap-3 px-3">
                <div class="w-24 bg-green-600 rounded-full py-0.5 px-6 mb-6"></div>
                <span class="text-lg text-white font-medium mb-6">Contact</span>
            </div>
            <h3 class="text-3xl text-white font-bold mb-6 px-3">Interested in working together?</h3>
            <div class="mt-6 px-3">
                <p class="max-w-lg text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi tenetur id deserunt ipsa. 
                    Modi odio aperiam earum officia cupiditate veritatis! Ullam iste magni placeat, 
                    odit veritatis omnis adipisci nisi soluta?
                </p>
                <button class="inline-block bg-green-600 hover:bg-green-700 transition ease-in duration-150 py-4 px-5 lg:px-8 text-white mt-6">
                    Contact me
                </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Logo from '~/assets/logo.svg'
useHead({
    meta: [
        {   hid: 'og:description', property: 'og:description', content: "Hey, I'm Hessel - a detail-oriented web developer with a passion"},
        {   hid: 'og:title', property: 'og:title', content: 'My portfolio'},
        {   hid: 'og:site_name', property: 'og:site_name', content: 'heesel.nl'},
        {   hid: 'og:url', property: 'og:url', content: 'https://www.heesel.nl'},
        {   hid: 'og:image', property: 'og:image', content: `https://www.heesel.nl${Logo}`},
        {   hid: 'og:image:secure_url', property: 'og:secure_url', content: `https://www.heesel.nl${Logo}`},

        {   hid: 'twitter:card', property: 'twitter:card', content: `https://www.heesel.nl${Logo}`},
        {   hid: 'twitter:description', property: 'twitter:description', content: "Hey, I'm Hessel - a detail-oriented web developer with a passion"},
        {   hid: 'twitter:title', property: 'twitter:title', content: 'My portfolio'},
        {   hid: 'twitter:image', property: 'twitter:image', content: `https://www.heesel.nl${Logo}`},
    ]
})

function scrollToSection(id: string) {
    const section = document.getElementById(id)
    section!.scrollIntoView({behavior: "smooth"});
}

</script>
