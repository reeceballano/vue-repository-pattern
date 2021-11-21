<template>
    <div class="form-field">
        <input type="text" class="primary-input" placeholder="This is a text" />
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
        @apply bg-gray-100 w-full px-4 py-3 ring-2 ring-gray-100
                hover:bg-white focus-within:bg-white focus:outline-none transition-colors;
    }
</style>