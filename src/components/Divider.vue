<template>
    <div :class="[`border-${bg}-400`]" class="divider"></div>
</template>

<script>

export default {
    name: 'Divider',
    props: {
        bg: {
            type: String,
            default: 'gray'
        }
    }
}
</script>

<style scoped>
    .divider {
        @apply w-full h-0 my-10 border-b;
    }
</style>