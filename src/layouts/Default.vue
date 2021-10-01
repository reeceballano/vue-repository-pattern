<template>
    <div class="default-layout custom-container">
        <div class="sidebar  col-span-1 md:col-span-1">
            <section class="sidebar-title">
                <h2 class="text-2xl">Sidebar</h2>
            </section>
        </div>

        <div class="main-content col-span-1 md:col-span-2">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Default'
}
</script>

<style>
    .default-layout {
        @apply grid grid-cols-1 md:grid-cols-3 gap-4;
    }
</style>