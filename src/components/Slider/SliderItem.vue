<template>
    <div 
        class="slider-item"
    >
        {{ slide }}
    </div>
</template>

<script>
export default {
    name: 'SliderItem',
    props: {
        slide: {
            type: Object,
            required: true
        },
    }
}
</script>

<style>

</style>