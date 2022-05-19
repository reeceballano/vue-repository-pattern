<template>
    <div class="slider-wrapper">
        <div class="custom-container">
            
            <SliderControls 
                v-if="controls"
                @startSlide="initSlide" 
                @stopSlide="stopSlide"
            />

            <button @click.prevent="prevSlide">Prev slide</button>
            <button @click.prevent="nextSlide">Next slide</button>

            <div
                v-for="(slide, index) in slides" 
                :key="index" 
                class="slider-container"
            >
                <AnimateTransition name="slidedown">
                    <SliderItem 
                        v-show="index+1 == currentSlide" 
                        :slide="slide"
                        @mouseover="stopSlide" 
                    />
                </AnimateTransition>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onUnmounted, onMounted } from 'vue';
import SliderItem from '@/components/Slider/SliderItem';
import SliderControls from '@/components/Slider/SliderControls';
import AnimateTransition from '@/components/AnimateTransition';

export default {
    name: 'Slider',
    props: {
        slides: {
            type: Object,
            default: () => {}
        },
        controls: {
            type: Boolean,
            default: false
        }
    },
    components: {
        SliderItem,
        SliderControls,
        AnimateTransition
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
