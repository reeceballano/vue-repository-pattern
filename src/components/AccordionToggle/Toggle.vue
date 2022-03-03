<template>
    <div class="toggle-item">
        <div @click.prevent="toggleItem()" class="toggle-title">
            {{ title }}
            <Icon icon="PlusIcon" class="h-5 w-5 mr-2 text-blue-500"/>
        </div>
        <div v-if="isActive" class="toggle-description">
            <slot />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import Icon from '@/components/Icon.vue';

export default {
    name: 'Toggle',
    components: {
        Icon
    },
    props: {
        title: {
            type: String,
            default: 'Toggle Title'
        }
    },

    setup() {
        const isActive = ref(false);

        const toggleItem = () => {
            isActive.value = !isActive.value;
        }

        return {
            isActive,
            toggleItem
        }
    }
}
</script>

<style scoped>
    .toggle-title {
        @apply cursor-pointer text-left mb-0.5 px-10 py-3 bg-gray-100 flex justify-between;
    }

    .toggle-description {
        @apply text-left mb-0.5 px-10 py-3;
    }

</style>