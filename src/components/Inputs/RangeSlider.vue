<template>
    <div class="range-slider">
        <label v-show="showLabel" class="block mb-2">{{inputData.label}}: <span>{{modelValue}}</span></label>
        <input 
            :name="inputData.name" 
            @input="updateValue($event.target.value)"
            type="range" 
            min="1" 
            max="10000" 
            class="w-full"
        />
    </div>
</template>

<script>
export default {
    name: 'RangeSlider',
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