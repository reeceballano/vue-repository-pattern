<template>
    <div class="form-field">
        <input :type="type" class="primary-input" :placeholder="placeholder" />
    </div>
</template>

<script>
export default {
    name: 'PrimaryInput',
    props: {
        placeholder: {
            type: String
        },

        type: {
            type: String,
            default: 'text'
        }
    }
}
</script>

<style scoped>
    .primary-input {
        @apply bg-gray-100 w-full px-4 py-3 ring-2 ring-gray-100 mb-5
                hover:bg-white focus-within:bg-white focus:outline-none transition-colors;
    }
</style>