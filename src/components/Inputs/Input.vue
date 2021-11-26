<template>
    <input 
        :name="name"
        :type="type" 
        :value="modelValue" 
        @input="updateValue($event.target.value)" 
        class="primary-input" 
        :placeholder="(label) ? '' : placeholder" 
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
        
        placeholder: {
            type: String
        },

        name: {
            type: String
        },

        type: {
            type: String,
            default: 'text'
        },

        modelValue: {
            type: String,
            default: ''
        },

        label: {
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

</style>