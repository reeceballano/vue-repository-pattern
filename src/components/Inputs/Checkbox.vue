<template>
    <label v-show="showLabel" class="block mb-2">{{inputData.label}}</label>
    <div v-for="(option,i) in options" :key="i" class="checkbox-container">
        <label v-show="showLabel" :for="inputData.name" class="block mb-2">{{option}}</label>
        <input
            :name="inputData.name"
            :type="inputData.type" 
            :value="option" 
            @change="updateValue($event.target.value)" 
            class="" 
            :placeholder="(showLabel) ? '' : inputData.label" 
        />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Checkbox',
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
        const collectedValues = ref([]);

        const updateValue = (value) => {
            collectedValues.value.push(value)
            emit('update:modelValue', collectedValues);
        }

        return {
            updateValue,
        }
    }
}
</script>

<style>

</style>