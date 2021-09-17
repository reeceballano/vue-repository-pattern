<template>
    <div class="tabs">
        <ul>
            <li v-for="(tab, i) in tabsObj" :key="i" @click.prevent="changeTab(i+1)">{{ tab.title }}</li>
        </ul>

        <div class="tab-content-wrapper">
            <slot />
        </div>
    </div>
</template>

<script>
import { ref, provide } from 'vue';

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
        const currentTab = ref(1);
        const changeTab = (tab) => {
            currentTab.value = tab;
            console.log(currentTab.value)
        }

        provide('currentTab', currentTab);

        return {
            tabsObj,
            currentTab,
            changeTab
        }
    },
}
</script>