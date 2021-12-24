<template>
    <div class="range-slider">
        <label class="block mb-2">{{inputData.label}}</label>
        <input 
            :name="inputData.name" 
            type="range" 
            min="1" 
            max="100" 
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

    setup() {
        
    }
}
</script>

<style>

</style>