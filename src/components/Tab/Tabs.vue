<template>
    <div class="tabs">
        <ul class="flex justify-start md:flex-row flex-col">
            <li :class="[currentTab == i+1 ? 'active' : '']" class="tab-title" v-for="(tab, i) in registeredchild" :key="i" @click.prevent="changeTab(i+1)">
                <Icon :icon="tab.icon" class="h-5 w-5 mr-2 text-blue-500"/>{{ tab.title }}
            </li>
        </ul>

        <div class="tab-content-wrapper">
            <slot />
        </div>
    </div>
</template>

<script>
import { ref, provide } from 'vue';
import Icon from '@/components/Icon';

export default {
    name: 'Tab',
    props: {
        activeTab: {
            type: Number,
            default: 1
        }
    },
    components: {
        Icon
    },
    
    /***
     * LOOP TITLE FROM CHILD ATTRIBUTE
     * SET PROVIDE/INJECT TO PASS DATA FROM CHILD TO PARENT AND VICE VERSA
     * THEN ADD EVENT TO SET THE CURRENT TAB INDEX
     */

    setup(props) {
        const currentTab = ref(props.activeTab);
        const changeTab = (tab) => {
            currentTab.value = tab;
            console.log(currentTab.value)
        }

        const registerChild = (child) => registeredchild.value.push(child);
        
        const registeredchild = ref([]);

        provide('tab', { currentTab,  registerChild });

        return {
            currentTab,
            changeTab,
            registeredchild,
        }
    },
}
</script>

<style scoped>
    .tab-title {
        @apply px-10 py-3 bg-gray-100 cursor-pointer flex justify-around items-center;
    }

    .active {
        @apply bg-white border-b;
    }
</style>