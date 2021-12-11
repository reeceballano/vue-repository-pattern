<template>
    <div class="select-container">
        <select>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
            <option value="">Option 5</option>
        </select>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Select',
    props: {
        inputData: {
            type: Object,
            default: () => {}
        },

        modelValue: {
            type: Array
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