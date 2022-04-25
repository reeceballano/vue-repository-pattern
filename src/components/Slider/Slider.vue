<template>
    <div class="slider-wrapper">
        <div class="custom-container">
            <SliderItem v-for="(slide, index) in slides" :key="index" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import SliderItem from '@/components/Slider/SliderItem';

export default {
    name: 'Slider',
    components: {
        SliderItem
    },

    setup() {
        const slides = ref([
            { id: 1, image: 'https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg' },
            { id: 2, image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg' },
            { id: 3, image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg' }
        ])

        return {
            
        }
    }
}
</script>
