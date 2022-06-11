<template>
    <div class="slider-control">
        <PrimaryButton icon="PlayIcon" iconPosition="Right">Play</PrimaryButton>
        <button @click.prevent="stopSlide">Stop slide</button>
    </div>
</template>

<script>
import PrimaryButton from '@/components/Buttons/PrimaryButton';

export default {
    name: 'SliderControls',
    
    components: {
        PrimaryButton
    },

    setup(props, {emit}) {
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