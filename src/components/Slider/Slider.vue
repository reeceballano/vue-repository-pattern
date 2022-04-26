<template>
    <div class="slider-wrapper">
        <div class="custom-container">
            <div
                v-for="(slide, index) in slides" 
                :key="index" 
                class="slider-container"
            >
                <SliderItem v-show="index+1 == currentSlide" :slide="slide" />

            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
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

        const currentSlide = ref(1);

        const initSlide = () => {
            console.log(slides.value.length)
            setInterval(() => {
                const slidesCount = slides.value.length;
                if(currentSlide.value < slidesCount) {
                    currentSlide.value++;
                    console.log(currentSlide.value);
                } else {
                    currentSlide.value = 1;
                }
            },2000)
        }

        onMounted(() => {
            initSlide();
        })

        return {
            slides,
            currentSlide
        }
    }
}
</script>
