<template>
    <div class="slider-control">
        <button @click.prevent="initSlide">Start slide</button>
        <button @click.prevent="stopSlide">Stop slide</button>
    </div>
</template>

<script>
export default {
    name: 'SliderControls',
}
</script>

<style>

</style>