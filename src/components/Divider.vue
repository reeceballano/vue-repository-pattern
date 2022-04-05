<template>
    <div :class="[`border-${bg}-400`, `h-${height}`]" class="divider"></div>
</template>

<script>

export default {
    name: 'Divider',
    props: {
        bg: {
            type: String,
            default: 'gray'
        },

        height: {
            type: String,
            default: '1',
        }
    }
}
</script>

<style scoped>
    .divider {
        @apply w-full h-0 my-10 border-b;
    }
</style>