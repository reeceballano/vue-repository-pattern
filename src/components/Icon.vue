<template>
    <div :class="[
            (width) ? `w-${width}` : '',
            animation //eg. animate-spin
        ]" 
        class="icon-wrapper mr-2"
    >
        <component :is="heroIcons[tabIcon]" />
    </div>
</template>

<script>
import * as heroIcons from '@heroicons/vue/solid';
import { computed } from 'vue';

export default {
    name: 'Icon',
    props: {
        icon: {
            type: String,
            default: 'CogIcon'
        },

        width: {
            type: Number
        },

        animation: {
            type: String
        }
    },

    setup(props) {
        const tabIcon = computed(() => { return props.icon })

        return {
            heroIcons,
            tabIcon     
        }
    },
}
</script>