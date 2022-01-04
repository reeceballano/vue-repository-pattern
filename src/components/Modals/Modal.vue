<template>
    <div>
        <div v-if="overlay">
            <AnimateTransition>
                <div v-show="isVisible" class="modal-overlay"></div>
            </AnimateTransition>
        </div>

        <AnimateTransition>
            <div v-show="isVisible" class="modal-container">
                <div class="modal">
                    <div @click="closeModal(); onClose();" class="hover:bg-red-200 transition-colors close-button absolute right-4 top-4 cursor-pointer">
                        <Icon icon="XIcon" :width="5" />
                    </div>
                    <h2 class="text-2xl border-b-2 inline-block pb-2 mb-3 border-gray-100"><slot name="modalTitle" /></h2>

                    <div class="modal-content">
                        <p><slot name="modalContent" /></p>
                    </div>
                </div>
            </div>
        </AnimateTransition>
        <slot name="modalButton"/>
    </div>
</template>

<script>
import { computed } from 'vue';
import Icon from '@/components/Icon';
import AnimateTransition from '@/components/AnimateTransition';

export default {
    name: 'Modal',
    components: {
        Icon,
        AnimateTransition
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        },

        overlay: {
            type: Boolean,
            default: true
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

        const onClose = () => {
            emit('onClose');
        }

        return {
            closeModal,
            onClose,
            isVisible,
        }
    }
}
</script>

<style scoped>

    .modal-overlay {
        @apply fixed w-screen h-screen bg-gray-800 opacity-80 top-0 left-0 z-10;
    }
    .modal-container {
        @apply fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-20;
    }

    .modal {
        @apply bg-white min-h-1/4 md:w-2/5 w-11/12 md:p-9 p-5 shadow-2xl rounded-xl relative transform transition-colors;
    }

    .isActive {
        @apply bg-red-600 delay-1000;
    }

</style>