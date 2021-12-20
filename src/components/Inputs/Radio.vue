<template>
    <label v-show="showLabel" for="option1">{{ inputData.label }}</label>
    <div class="radio-container">
        <input 
            :type="inputData.type" 
            :name="inputData.name" 
            :value="modelValue"
            @change="updateValue($event.target.value)"
            class="primary-input"  
        />
    </div>
</template>

<script>
export default {
    name: 'Radio',
    props: {
        inputData: {
            type: Object,
            default: () => {}
        },

        modelValue: {
            type: String
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