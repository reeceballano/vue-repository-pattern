<template>
    <div class="range-slider">
        <label for="range">Range Slider</label>
        <input name="range" type="range" />
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
    }
}
</script>

<style>

</style>