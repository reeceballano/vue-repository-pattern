<template>
    <button :class="[(outlined) ? 'secondary-btn-outlined' : 'secondary-btn', buttonBg, cssStyle]">
        <slot />
    </button>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'SecondaryButton',
    props: {
        outlined: {
            type: Boolean,
            default: false
        },
        cssStyle: {
            type: String,
            default: 'text-gray-700 text-base font-semibold rounded'
        },
    },

    setup(props) {
        const store = useStore();

        const buttonSettings = computed(() => {
            return store.getters['siteSetting/getButtonSetting'];
        })

        const buttonBg = computed(() => {
            const checkBg = props.cssStyle;
            
            if(checkBg.includes('bg-')) {
                return props.cssStyle;
            } else {
                console.log('props store', buttonSettings.value.background)
                return buttonSettings.value.background;
            }
        })

        return {
            buttonBg
        }
    }
}
</script>

<style scoped>
    .secondary-btn {
        @apply ring-1 py-4 px-14 uppercase tracking-widest font-thin;
    }

    .secondary-btn-outlined {
        @apply bg-transparent ring-1 py-4 px-14;
    }
</style>