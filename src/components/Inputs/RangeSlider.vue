<template>
    <div class="range-slider">
        <input type="range" />
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
    }
}
</script>

<style>

</style>