<template>
    <div class="radio-container">
        <label for="option1">Option 1</label>
        <input 
            :type="inputData.type" 
            name="option1" 
            value="option 1" 
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