<template>
    <div class="toggle-item">
        <div class="toggle-title"></div>
        <div class="toggle-description">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Toggle',
    props: {
        title: {
            type: String,
            default: 'Toggle Title'
        }
    }
}
</script>

<style scoped>
    .toggle-title {
        @apply cursor-pointer text-left mb-0.5 px-10 py-3 bg-gray-100;
    }

    .toggle-description {
        @apply text-left mb-0.5 px-10 py-3;
    }

</style>