<template>
    <router-link
        v-if="type == 'link'"
        :class="[(outlined) ? 'secondary-btn-outlined' : 'secondary-btn', buttonBg, cssStyle]"
        :to="{ name:routeTo, params: buttonParams}"
    >
        <slot />
    </router-link>
    
    <button 
        v-else 
        @click.prevent="buttonClick"
        :class="[(outlined) ? 'secondary-btn-outlined' : 'secondary-btn', buttonBg, cssStyle]"
    >
        <slot />
    </button>
</template>

<script>
/**
 * TODO
 * - ADD A NATIVE LINK ELEMENTS
 */
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
        routeTo: {
            type: String
        },
        buttonParams: {
            type: Object,
            default: () => {}
        },
        type: {
            type: String,
            default: 'button'
        }
    },

    setup(props, { emit }) {
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

        const buttonClick = () => {
            emit('buttonClick');
        }

        return {
            buttonBg,
            buttonClick
        }
    }
}
</script>

<style scoped>
    .secondary-btn {
        @apply ring-1 py-4 px-14 uppercase tracking-widest font-thin rounded;
    }

    .secondary-btn-outlined {
        @apply bg-transparent uppercase font-thin ring-1 py-4 px-14;
    }
</style>