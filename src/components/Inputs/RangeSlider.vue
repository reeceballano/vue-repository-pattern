<template>
    <div class="range-slider">
        <label v-show="showLabel" class="block mb-2">*ON DEVELOPMENT* {{inputData.label}}: <span>{{sliderValue}}, {{sliderValueTwo}}</span></label>
        
        <!-- TODO
            - add dual handles
            - modelValue should be in array[min,max]
        -->

        <div class="range-wrapper">
            <input 
                :name="inputData.name" 
                @input="updateValue"
                type="range" 
                :min="options[0]" 
                :max="options[1]" 
                class="w-full"
                v-model="sliderValue"
            />
            <input 
                name="rangeTwo" 
                type="range" 
                :min="options[0]" 
                :max="options[1]" 
                class="w-full"
            />
        </div>
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
            type: [Number, Array]
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
            emit('update:modelValue', Number(sliderValue.value));
        }

        const sliderValue = ref(0);
        const sliderValueTwo = ref(props.options[1]);

        return {
            updateValue,
            sliderValue,
            sliderValueTwo
        }
    }
}
</script>

<style>

</style>