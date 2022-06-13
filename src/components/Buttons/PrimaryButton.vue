<template>
    <router-link
        v-if="type == 'link' && !String(routeTo).includes('#')" 
        :to="(String(routeTo).includes('/')) ? routeTo : { name:routeTo, params: buttonParams }"
        :class="[`${buttonBg} rounded ${cssStyle}`]"
        class="primary-button">
            <Icon v-show="icon && iconPosition == 'Left'" :icon="icon" class="h-5 w-5 mr-2"/>
            <span>
                <slot />
            </span>
            <Icon v-show="icon && iconPosition == 'Right'" :icon="icon" class="h-5 w-5 ml-2"/>  
    </router-link>
    
    <a 
        v-else-if="type == 'link' && String(routeTo).includes('#')"  
        :href="routeTo"
        @click.prevent="buttonClick"
        :class="[`${buttonBg} rounded ${cssStyle}`]"
        class="primary-button"
    >
        <Icon v-show="icon && iconPosition == 'Left'" :icon="icon" class="h-5 w-5 mr-2"/>
        <span>
            <slot />
        </span>
        <Icon v-show="icon && iconPosition == 'Right'" :icon="icon" class="h-5 w-5 ml-2"/>
    </a>

    <button v-else :class="[`${buttonBg} rounded ${cssStyle}`]" :type="(type == 'button') ? 'button' : 'submit'" class="primary-button" @click.prevent="buttonClick">
        <Icon v-show="icon && iconPosition == 'Left'" :icon="icon" :class="($slots.default) ? 'mr-2' : ''" class="h-5 w-5"/>
        <span v-if="$slots.default">
            <slot />
        </span>
        <Icon v-show="icon && iconPosition == 'Right'" :icon="icon" :class="($slots.default) ? 'ml-2' : ''" class="h-5 w-5"/>
    </button>
</template>

<script>
/**
 * TODO LIST
 * - DONE-remove default classes style when cssStyle is not empty
 * - DONE-add native link
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

        icon: {
            type: String,
            default: ''
        },

        iconPosition: {
            type: String,
            default: 'right'
        },

        cssStyle: {
            type: String,
            default: 'text-base rounded'
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