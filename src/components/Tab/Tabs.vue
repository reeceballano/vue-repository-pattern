<template>
    <div class="tabs">
        <ul class="flex justify-start">
            <li :class="[currentTab == i+1 ? 'active' : '']" class="tab-title" v-for="(tab, i) in registeredchild" :key="i" @click.prevent="changeTab(i+1)">{{ tab }}</li>
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

        const registerChild = (child) => registeredchild.value.push(child);
        
        const registeredchild = ref([]);

        provide('tab', { currentTab,  registerChild });

        return {
            tabsObj,
            currentTab,
            changeTab,
            registeredchild,
        }
    },
}
</script>

<style scoped>
    .tab-title {
        @apply px-10 py-3 bg-gray-100 cursor-pointer;
    }

    .active {
        @apply bg-white border-b;
    }
</style>