<template>

    <router-link
        v-if="type == 'link'" 
        @click.prevent="buttonClick"
        :to="{ name:routeTo, params: buttonParams }"
        :class="[`bg-${bg}-100 hover:bg-${bg}-200`]"
        class="primary-button">
        <slot />
        <Icon v-show="showIcon" icon="MenuAlt2Icon" class="h-3 w-3 ml-2"/>
    </router-link>
    <button v-else :class="[`bg-${bg}-100 hover:bg-${bg}-200`]" class="primary-button" @click.prevent="buttonClick">
        <slot />
        <Icon v-show="showIcon" icon="MenuAlt2Icon" class="h-3 w-3 ml-2"/>
    </button>
</template>

<script>
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
            default: 'blue'
        }
    },
    components: {
        Icon,
    },

    setup(props, { emit }) {
        const buttonClick = () => {
            emit('buttonClick');
        }
        return {
            buttonClick
        }
    }
}
</script>

<style scoped>
    .primary-button {
        @apply text-center text-gray-700 text-base font-semibold px-6 py-2 rounded-lg  delay-150  inline-flex items-center justify-center;
    }

    .primary-button:hover {
        @apply transition-all;
    }
</style>