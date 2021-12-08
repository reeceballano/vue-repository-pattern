<template>
    <label v-show="showLabel" :for="inputData.name" class="block mb-2">{{inputData.label}}</label>
    <textarea
        :name="inputData.name"
        :type="inputData.type" 
        :value="modelValue" 
        @input="updateValue($event.target.value)" 
        class="primary-input" 
        :placeholder="(showLabel) ? '' : inputData.label" 
    ></textarea>
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
        },

        options: {
            type: Array
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