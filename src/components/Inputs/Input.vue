<template>
    <input 
        :name="inputData.name"
        :type="inputData.type" 
        :value="inputData.modelValue" 
        @input="updateValue($event.target.value)" 
        class="primary-input" 
        :placeholder="(inputData.label) ? '' : inputData.placeholder" 
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
    },
    
    setup(props, { emit }) {
        const updateValue = (value) => {
            emit('update:inputData.modelValue', value);
        }

        return {
            updateValue
        }
    }
}
</script>

<style>

</style>