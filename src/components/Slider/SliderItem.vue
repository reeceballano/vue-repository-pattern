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

</style>