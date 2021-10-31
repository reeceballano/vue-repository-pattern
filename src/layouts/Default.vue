<template>
    <div class="default-layout custom-container">
        <Sidebar />

        <div class="main-content col-span-1 md:col-span-2">
            <slot />
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';

export default {
    name: 'Default',
    components: {
        Sidebar
    }
}
</script>

<style>
    .default-layout {
        @apply grid grid-cols-1 md:grid-cols-3 md:gap-24;
    }
</style>