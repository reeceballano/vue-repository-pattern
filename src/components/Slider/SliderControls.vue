<template>
    <div class="slider-control">
        <button @click.prevent="startSlide">Start slide</button>
        <button @click.prevent="stopSlide">Stop slide</button>
    </div>
</template>

<script>
import { boolean } from 'yargs';

export default {
    name: 'SliderControls',

    setup() {
        const startSlide = () => {
            emit('startSlide');
        }

        const stopSlide = () => {
            emit('stopSlide');
        }

        return {
            startSlide,
            stopSlide
        }
    }
}
</script>

<style>

</style>