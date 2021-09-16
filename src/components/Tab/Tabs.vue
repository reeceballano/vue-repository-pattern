<template>
    <div class="tabs">
        <ul>
            <li v-for="(tab, i) in tabsObj" :key="i">{{ tab.title }}</li>
        </ul>

        <div class="tab-content-wrapper">
            <slot />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Tab',
    props: {
        tabsProp: {
            type: Object,
            default: () => {}
        }
    },

    setup(props) {
        const tabsObj = ref(props.tabsProp);

        return {
            tabsObj
        }
    },
}
</script>