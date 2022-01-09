<template>
    <router-link
        v-if="type == 'link'" 
        @click.prevent="buttonClick"
        :to="(String(routeTo).includes('/')) ? routeTo : { name:routeTo, params: buttonParams }"
        :class="[`bg-${buttonBg}-100 hover:bg-${buttonBg}-200`]"
        class="primary-button">
        <span>
            <slot />
        </span>
        <Icon v-show="showIcon" icon="MenuAlt2Icon" class="h-3 w-3 ml-2"/>
    </router-link>
    <button v-else :class="[`bg-${buttonBg}-100 hover:bg-${buttonBg}-200`]" :type="(type == 'button') ? 'button' : 'submit'" class="primary-button" @click.prevent="buttonClick">
        <span>
            <slot />
        </span>
        <Icon v-show="showIcon" icon="MenuAlt2Icon" class="h-3 w-3 ml-2"/>
    </button>
</template>

<script>
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

        bg: {
            type: String,
        }

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
            if(props.bg) {
                return props.bg;
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
        @apply text-center text-gray-700 text-base font-semibold px-6 py-4 rounded-md  delay-150  inline-flex items-center justify-center;
    }

    .primary-button:hover {
        @apply transition-all;
    }

    .primary-button span {
        @apply inline-block leading-4;
    }
</style>