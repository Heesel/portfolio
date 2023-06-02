<template>
    <footer aria-label="Site Footer" class="bg-gray-800 text-gray-500">
        <div class="container mx-auto max-w-screen-2xl px-3 py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex justify-center sm:justify-start">
                Hessel p.
            </div>

            <p class="mt-4 text-center text-sm lg:mt-0 lg:text-right">
                Copyright &copy; {{year}}. All rights reserved.
            </p>
            </div>
        </div>
    </footer>
</template>
<script lang="ts" setup>
    const date = new Date();
    const year = date.getFullYear();
</script>