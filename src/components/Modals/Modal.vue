<template>
    <div>
        <transition 
                enter-active-class="transition-opacity delay-150" 
                enter-from-class="opacity-0" 
                enter-to-class="opacity-100" 
                leave-active-class="transition-opacity duration-200" 
                leave-from-class="opacity-100" 
                leave-to-class="opacity-0"
            >
            <div v-show="isVisible" class="modal-overlay"></div>
        </transition>

        <transition 
            enter-active-class="transition-opacity delay-100" 
            enter-from-class="opacity-0" 
            enter-to-class="opacity-100" 
            leave-active-class="transition-opacity duration-150" 
            leave-from-class="opacity-100" 
            leave-to-class="opacity-0"
        >
            <div v-show="isVisible" class="modal-container">
                <div class="modal">
                    <div @click="closeModal" class="close-button absolute right-4 top-4 cursor-pointer">
                        <Icon icon="XIcon" :width="5" />
                    </div>
                    <h2 class="text-2xl border-b-2 inline-block pb-2 mb-3 border-gray-100"><slot name="modalTitle" /></h2>

                    <div class="modal-content">
                        <p><slot name="modalContent" /></p>
                    </div>
                </div>
            </div>
        </transition>
        <slot name="modalButton"/>
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