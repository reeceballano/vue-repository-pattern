<template>
    <div class="range-slider">
        {{ sliderValue }}
        <label v-show="showLabel" class="block mb-2">{{inputData.label}}: <span>{{sliderValue}}</span></label>
        <input 
            :name="inputData.name" 
            @input="updateValue"
            type="range" 
            min="1" 
            max="10000" 
            class="w-full"
            v-model="sliderValue"
        />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'RangeSlider',
    props: {
        inputData: {
            type: Object,
            default: () => {}
        },
        
        modelValue: {
            type: [String, Number],
            default: 1000
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
        const updateValue = () => {
            emit('update:modelValue', sliderValue.value);
        }

        const sliderValue = ref(9000);

        return {
            updateValue,
            sliderValue,
        }
    }
}
</script>

<style>

</style>