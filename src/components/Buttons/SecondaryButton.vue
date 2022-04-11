<template>
    <button :class="`btn-blue${(outlined) ? '-outlined' : ''}`">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'SecondaryButton',
    props: {
        outlined: {
            type: Boolean,
            default: false
        },
        cssStyle: {
            type: String,
            default: 'text-gray-700 text-base font-semibold rounded'
        },
    }
}
</script>

<style scoped>

</style>