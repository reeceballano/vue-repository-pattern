<template>
    <div class="form-field">
        <input type="text" class="primary-input" />
    </div>
</template>

<script>
export default {
    name: 'PrimaryInput',
    props: {
        placeholder: {
            type: String
        }
    }
}
</script>

<style scoped>
    .primary-input {
        @apply bg-gray-100 w-full px-4 py-3 ring-2 ring-gray-100 focus-within:bg-white focus:outline-none transition-colors
    }
</style>