<template>
    <div>
        <div v-show="isVisible" class="modal-container">
            <div class="modal">
                <div @click="closeModal" class="close-button absolute right-4 top-4 cursor-pointer">
                    <Icon icon="XIcon" :width="5" />
                </div>
                {{ isVisible }}
                <h2 class="text-2xl">Modal Title</h2>

                <div class="modal-content">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Suscipit minima praesentium natus non, quas dolores vitae magnam? 
                        Earum dolorum perferendis officia totam commodi. 
                        Beatae, incidunt molestias eius dolor reprehenderit placeat?
                    </p>
                </div>
            </div>

        </div>
        <slot />
    </div>
</template>

<script>
import Icon from '@/components/Icon';
import { computed } from 'vue';

export default {
    name: 'Modal',
    components: {
        Icon
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },

    setup(props, { emit }) {
        const isVisible = computed(() => {
            return props.visible;
        });
        
        const closeModal = () => {
            console.log('modal close', isVisible.value);
            emit('closeModal');
            //isVisible.value = !isVisible.value;
        }

        return {
            closeModal,
            isVisible,
        }
    }
}
</script>

<style scoped>
    .modal-container {
        @apply fixed w-screen h-screen top-0 left-0 bg-gray-800 opacity-100 flex items-center justify-center;
    }

    .modal {
        @apply bg-white min-h-1/4 md:w-2/5 w-11/12 md:p-9 p-5 shadow-2xl rounded-xl relative;
    }

</style>