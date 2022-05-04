<template>
    <div class="slider-wrapper">
        <div class="custom-container">
            <button @click.prevent="initSlide">Start slide</button>
            <button @click.prevent="stopSlide">Stop slide</button>
            <button @click.prevent="prevSlide">Prev slide</button>
            <button @click.prevent="nextSlide">Next slide</button>

            <div
                v-for="(slide, index) in slides" 
                :key="index" 
                class="slider-container"
            >
                <SliderItem 
                    v-show="index+1 == currentSlide" 
                    :slide="slide"
                    @mouseover="stopSlide" 
                />
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onUnmounted, onMounted } from 'vue';
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

        let sliderInterval = null;

        const initSlide = () => {
            stopSlide();
            sliderInterval = setInterval(() => {
                console.log(slides.value.length)
                const slidesCount = slides.value.length;
                currentSlide.value++;
                if(currentSlide.value > slidesCount) {
                currentSlide.value = 1; 
                }
            },2000)
        }

        const stopSlide = () => {
            console.log('stop slider');
            clearInterval(sliderInterval);
        }

        const nextSlide = () => {
            currentSlide.value++;
        }

        const prevSlide = () => {
            currentSlide.value--;
        }

        onMounted(() => {
            initSlide();
        })

        onUnmounted(() => {
            console.log('unmounted')
            clearInterval(initSlide);
        })

        return {
            slides,
            currentSlide,
            initSlide,
            stopSlide,
            nextSlide,
            prevSlide,
            sliderInterval
        }
    }
}
</script>
