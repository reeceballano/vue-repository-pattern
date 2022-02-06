<template>
    <div class="loading">
        <h3 class="flex items-center">
            <Icon :width="4" :icon="`${icon}Icon`" :animation="`animate-${animation}`" />
            <span v-if="text">
                {{ text }}
            </span>
            <span v-else>
                {{ loadingText }}
            </span>
        </h3>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Icon from '@/components/Icon';

export default {
    name: 'Loading',
    components: {
        Icon
    },
    props: {
        text: {
            type: String
        }
    },

    setup() {
        const store = useStore();

        const icon = computed(() => {
            return store.getters['loading/getIcon'];
        })

        const animation = computed(() => {
            return store.getters['loading/getAnimation'];
        })

        const loadingText = computed(() => {
            return store.getters['loading/getLoadingText'];
        })

        console.log(icon.value)

        return {
            icon,
            animation,
            loadingText,
        }
    }
}
</script>

<style>

</style>