<template>
    <div class="range-slider">
        <label v-show="showLabel" class="block mb-2">*ON DEVELOPMENT* {{inputData.label}}: 
            <span v-if="modelValue.length">{{modelValue}}</span>
            <span v-else>{{options}}</span>
        </label>
        <!-- TODO
            - add dual handles - DONE!
            - modelValue should be in array[min,max] - DONE!
            - add range background - DONE!
            - add value on handles
            - avoid range to overlap
        -->
        {{initialValue}}

        <div class="range-wrapper relative h-16">
            <input 
                :name="inputData.name" 
                @input="updateValue"
                type="range" 
                :min="0" 
                :max="options[1]" 
                class="w-full absolute outline-none h-1"
                v-model="sliderValue"
            />
            <input 
                name="rangeTwo" 
                @input="updateValue"
                type="range" 
                :min="options[0]" 
                :max="options[1]" 
                class="w-full absolute outline-none h-1"
                v-model="sliderValueTwo"
            />
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
    name: 'RangeSlider',
    props: {
        inputData: {
            type: Object,
            default: () => {}
        },
        
        modelValue: {
            type: [Number, Array],
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
        const initialValue = computed(() => {
            const minVal = props.inputData.value[0];
            const maxVal = props.inputData.value[1];
            const max = maxVal / 100;
            return minVal / max;
        })

        const updateValue = () => {
            emit('update:modelValue', [Number(sliderValue.value), Number(sliderValueTwo.value)]);
        }

        const sliderValue = ref(props.inputData.value[0]);
        const sliderValueTwo = ref(props.inputData.value[1]);

        return {
            updateValue,
            sliderValue,
            sliderValueTwo,
            initialValue
        }
    }
}
</script>

<style scoped>
input[type='range'] {
    height: 30px;
    overflow: hidden;
    cursor: pointer;
        outline: none;
}
input[type='range'],
input[type='range']::-webkit-slider-runnable-track,
input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: none;
}
input[type='range']::-webkit-slider-runnable-track {
    width: 200px;
    height: 1px;
    background: #003D7C;
}

input[type='range']:nth-child(2)::-webkit-slider-runnable-track{
    background: none;
}

input[type='range']::-webkit-slider-thumb {
    position: relative;
    height: 15px;
    width: 15px;
    margin-top: -7px;
    background: #fff;
    border: 1px solid #003D7C;
    border-radius: 25px;
    z-index: 1;
}


input[type='range']:nth-child(1)::-webkit-slider-thumb{
    z-index: 2;
}
</style>