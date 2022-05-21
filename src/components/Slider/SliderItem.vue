<template>
    <div 
        class="slider-item"
    >
        {{ slide }}
        <Image :src="slide.image" />
    </div>
</template>

<script>
import Image from '@/components/Image';

export default {
    name: 'SliderItem',
    props: {
        slide: {
            type: Object,
            required: true
        },
    },
    components: {
        Image
    }
}
</script>

<style>
    .slider-item {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>