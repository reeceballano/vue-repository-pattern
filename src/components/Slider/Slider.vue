<template>
    <div class="slider-wrapper">
                   PAUSE: {{pauseHover}}

        <div class="custom-container">
            
            <div @mouseover="isHovered = true;" :class="(isHovered) ? 'opacity-90' : 'opacity-0'" class="slider-buttons">
                <PrimaryButton @mouseover="isHovered = true;"  :cssStyle="(isHovered) ? 'opacity-90' : 'opacity-0'" iconPosition="Left" icon="ArrowCircleLeftIcon" type="button" @click.prevent="prevSlide"></PrimaryButton>
                <PrimaryButton @mouseover="isHovered = true;" :cssStyle="(isHovered) ? 'opacity-90' : 'opacity-0'" iconPosition="Right" icon="ArrowCircleRightIcon" type="button" @click.prevent="nextSlide"></PrimaryButton>
            </div>

            <div
                v-for="(slide, index) in slides" 
                :key="index" 
                class="slider-container"
            >
                <AnimateTransition :name="currentDirection">
                    <SliderItem 
                        v-show="index+1 == currentSlide" 
                        :slide="slide"
                        @mouseover="(pauseHover) ? stopSlide() : initSlide(); isHovered = true;" 
                        @mouseleave="initSlide(); isHovered = false"
                    />
                </AnimateTransition>
            </div>
            <SliderControls 
                v-if="controls"
                @startSlide="initSlide" 
                @stopSlide="stopSlide"
            />
        </div>
    </div>
</template>

<script>
import { ref, onUnmounted, onMounted, toRefs, computed } from 'vue';
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
        },
        pauseHover: {
            type: Boolean,
            default: true
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

        const isHovered = ref(false);

        const direction = ref('right');

        const currentDirection = computed(() => {
            return (direction.value == 'right') ? 'slide-in' : 'slide-out';
        })

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
            direction.value = 'left';
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
            sliderInterval,
            currentDirection,
            isHovered
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
