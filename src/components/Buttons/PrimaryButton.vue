<template>
    <router-link
        v-if="type == 'link' && !String(routeTo).includes('#')" 
        :to="(String(routeTo).includes('/')) ? routeTo : { name:routeTo, params: buttonParams }"
        :class="[`${buttonBg} rounded`]"
        class="primary-button">
        <span>
            <slot />
        </span>
        <Icon v-show="showIcon" icon="MenuAlt2Icon" class="h-3 w-3 ml-2"/>
    </router-link>
    
    <a 
        v-else-if="type == 'link' && String(routeTo).includes('#')"  
        :href="routeTo"
        @click.prevent="buttonClick"
        :class="[`${buttonBg} rounded`]"
        class="primary-button"
    >
        <slot />
    </a>

    <button v-else :class="[`${buttonBg} rounded`]" :type="(type == 'button') ? 'button' : 'submit'" class="primary-button" @click.prevent="buttonClick">
        <span>
            <slot />
        </span>
        <Icon v-show="showIcon" icon="MenuAlt2Icon" class="h-3 w-3 ml-2"/>
    </button>
</template>

<script>
/**
 * TODO LIST
 * - DONE-remove default classes style when cssStyle is not empty
 * - add native link
*/

import { useStore } from 'vuex';
import { computed } from 'vue';
import Icon from '@/components/Icon';

export default {
    name: 'PrimaryButton',
    props: {
        type: {
            type: String,
            default: 'link'
        },

        routeTo: {
            type: String
        },

        buttonParams: {
            type: Object,
            default: () => {}
        },

        showIcon: {
            type: Boolean,
            default: false
        },

        cssStyle: {
            type: String,
            default: 'text-gray-700 text-base font-semibold rounded'
        },

    },
    components: {
        Icon,
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
            buttonSettings,
            buttonBg,
            buttonClick,
        }
    }
}
</script>

<style scoped>
    .primary-button {
        @apply text-center px-6 py-4 delay-150  inline-flex items-center justify-center;
    }

    .primary-button:hover {
        @apply transition-all;
    }

    .primary-button span {
        @apply inline-block leading-4;
    }
</style>