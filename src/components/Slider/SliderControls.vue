<template>
    <div class="slider-control">
        <PrimaryButton type="button" cssStyle="mr-1.5" @buttonClick="startSlide" icon="PlayIcon" iconPosition="Right"></PrimaryButton>
        <PrimaryButton type="button" @buttonClick="stopSlide" icon="StopIcon" iconPosition="Right"></PrimaryButton>
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

<style scoped>
    .slider-control {
        @apply z-10 absolute bottom-10;
    }
</style>