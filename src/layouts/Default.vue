<template>
    <div class="default-layout">
        <div class="main-content">
            <slot />
        </div>

        <div class="sidebar">
            <h2>Sidebar</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Default'
}
</script>

<style>

</style>