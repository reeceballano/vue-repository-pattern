<template>
    <div class="slider-wrapper">
        <div class="custom-container">
            
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
    props: {
        slides: {
            type: Object,
            default: () => {}
        }
    },
    components: {
        SliderItem
    },

    setup(props) {
        const currentSlide = ref(1);

        let sliderInterval = null;

        const initSlide = () => {
            stopSlide();
            sliderInterval = setInterval(() => {
                console.log(props.slides.length)
                const slidesCount = props.slides.length;
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
