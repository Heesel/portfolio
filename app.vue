<template>
    <SpeedInsights />
    <div class="font-kanit flex flex-col h-screen justify-between bg-gray-900 overflow-auto">
        <LayoutsNavigation />
        <NuxtPage />
        <LayoutsTheFooter />
    </div>
</template>
<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

</script>
