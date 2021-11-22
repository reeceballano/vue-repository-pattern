<template>
    <div class="form-field">
        <textarea v-if="type == 'textarea'" class="primary-input"></textarea>
        <input v-else :type="type" :value="modelValue" @input="updateValue($event.target.value)" class="primary-input" :placeholder="placeholder" />
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
        },

        modelValue: {
            type: String,
            default: ''
        }
    },
    
    setup(props, { emit }) {
        const updateValue = (value) => {
            emit('update:modelValue', value);
        }

        return {
            updateValue
        }
    }
}
</script>

<style scoped>
    .primary-input {
        @apply bg-gray-100 w-full px-4 py-3 ring-2 ring-gray-100 mb-1
                hover:bg-white focus-within:bg-white focus:outline-none transition-colors;
    }
</style>