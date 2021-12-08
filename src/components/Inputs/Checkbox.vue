<template>
    <label v-show="showLabel" class="block mb-2">{{inputData.label}}</label>
    <div v-for="(option,i) in options" :key="i" class="checkbox-container flex items-center">
        <input
            v-model="collectedValues"
            :name="inputData.name"
            :type="inputData.type" 
            :value="option" 
            @change="updateValue($event.target.value)" 
            class="" 
            :placeholder="(showLabel) ? '' : inputData.label" 
        />
        <label v-show="showLabel" :for="inputData.name" class="block">{{option}}</label>
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
        // ASSIGN A MODEL FOR THE REFERENCE
        const collectedValues = ref([]);

        const updateValue = () => {
            // WE NEED TO MAP THE VALUES IN THE collectedValues ref
            emit('update:modelValue', collectedValues.value);
        }

        return {
            updateValue,
            collectedValues
        }
    }
}
</script>

<style>

</style>