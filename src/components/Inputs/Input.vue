<template>
    <label v-show="showLabel" :for="inputData.name" class="block mb-2">{{inputData.label}}</label>
    <input 
        :name="inputData.name"
        :type="inputData.type" 
        :value="modelValue" 
        @input="updateValue($event.target.value)" 
        class="primary-input" 
        :placeholder="(showLabel) ? '' : inputData.label" 
    />
</template>

<script>
export default {
    name: 'Input',
    props: {
        inputData: {
            type: Object,
            default: () => {}
        },

        modelValue: {
            type: String,
            default: ''
        },

        showLabel: {
            type: Boolean,
            default: false
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

<style>
    .form-field {
        @apply mb-3;
    }
    .primary-input {
        @apply bg-gray-100 w-full px-4 py-3 ring-2 ring-gray-100 mb-1
                hover:bg-white focus-within:bg-white focus:outline-none transition-colors;
    }
</style>