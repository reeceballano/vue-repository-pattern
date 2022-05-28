<template>
    <div class="slider-wrapper">
        <SliderControls 
            v-if="controls"
            @startSlide="initSlide" 
            @stopSlide="stopSlide"
        />

        <div class="custom-container">
            
            <div class="slider-buttons">
                <PrimaryButton type="link" routeTo="#" @click.prevent="prevSlide">Prev</PrimaryButton>
                <PrimaryButton type="link" routeTo="#" @click.prevent="nextSlide">Next</PrimaryButton>
            </div>
            

            <div
                v-for="(slide, index) in slides" 
                :key="index" 
                class="slider-container"
            >
                <AnimateTransition name="slide-in">
                    <SliderItem 
                        v-show="index+1 == currentSlide" 
                        :slide="slide"
                        @mouseover="stopSlide" 
                        @mouseleave="initSlide"
                    />
                </AnimateTransition>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onUnmounted, onMounted, toRefs } from 'vue';
import SliderItem from '@/components/Slider/SliderItem';
import SliderControls from '@/components/Slider/SliderControls';
import AnimateTransition from '@/components/AnimateTransition';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

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
        },
        interval: {
            type: Number,
            default: 3000
        }
    },
    components: {
        SliderItem,
        SliderControls,
        AnimateTransition,
        PrimaryButton
    },

    setup(props) {
        const currentSlide = ref(1);

        const direction = ref('right');

        let sliderInterval = null;

        const { slides } = toRefs(props);
        
        const initSlide = () => {
            stopSlide();
            sliderInterval = setInterval(() => {
                direction.value = 'right';
                console.log(slides.value.length)
                currentSlide.value++;
                if(currentSlide.value > slides.value.length) {
                    currentSlide.value = 1; 
                }
            },props.interval)
        }

        const stopSlide = () => {
            console.log('stop slider');
            clearInterval(sliderInterval);
        }

        const nextSlide = () => {
            currentSlide.value++;
            direction.value = 'right';
            if(currentSlide.value > slides.value.length) {
                currentSlide.value = 1; 
            }
            initSlide();
        }

        const prevSlide = () => {
            if(currentSlide.value == 1) {
                currentSlide.value = slides.value.length + 1;
            }
            currentSlide.value--;
            initSlide();
            console.log(currentSlide.value)
        }

        onMounted(() => {
            initSlide();
        })

        onUnmounted(() => {
            console.log('unmounted')
            stopSlide();
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

<style scoped>
    .slider-wrapper {
        display: flex;
        justify-content: center;
    }

    .slider-wrapper .custom-container {
        width: 900px;
        height: 400px;
        @apply flex justify-center items-center relative overflow-hidden;
    }

    .slider-buttons {
        @apply z-10 w-full justify-between flex;
    }
</style>
