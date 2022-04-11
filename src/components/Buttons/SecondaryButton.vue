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

        bg: {
            type: String,
            default: 'blue'
        }
    }
}
</script>

<style scoped>

</style>