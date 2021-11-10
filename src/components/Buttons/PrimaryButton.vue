<template>
    <router-link 
        @click.prevent="buttonClick"
        :to="{ name:routeTo, params: buttonParams }"
        class="primary-button">
        <slot />
        <Icon v-show="showIcon" icon="MenuAlt2Icon" class="h-3 w-3 ml-2"/>
    </router-link>
</template>

<script>
import Icon from '@/components/Icon';

export default {
    name: 'PrimaryButton',
    props: {
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
        @apply bg-indigo-100 text-indigo-700 text-base font-semibold px-6 py-2 rounded-lg  delay-150 inline-flex items-center;
    }

    .primary-button:hover {
        @apply bg-indigo-400 transition-all;
    }
</style>