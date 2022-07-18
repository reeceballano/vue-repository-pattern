<template>
    <label v-show="showLabel" class="block mb-2">{{inputData.label}}</label>
    <div class="checkbox-container flex justify-around py-1.5 h-px[2500]">
        <div v-for="(option,i) in options" :key="i" class="flex items-center">
            <input
                v-model="collectedValues"
                :name="inputData.name"
                :type="inputData.type" 
                :value="option" 
                @change="updateValue($event.target.value)" 
                class="mr-1.5" 
                :placeholder="(showLabel) ? '' : inputData.label" 
            />
            <label v-show="showLabel" :for="inputData.name" class="block">{{option}}</label>
        </div>
    </div>
</template>

<script>
    /**
    * TODO
    * - check if checkbox has value on initial page load
    * - fix the value of collectedValues, check if there is a value in inputData.value 
    */
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
        const collectedValues = ref(props.inputData.value);

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