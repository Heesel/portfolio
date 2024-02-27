<template>
    <div class="font-kanit flex flex-col h-screen justify-between bg-gray-900 overflow-auto">
        <SpeedInsights />
        <slot/>
    </div>
</template>
<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

</script>