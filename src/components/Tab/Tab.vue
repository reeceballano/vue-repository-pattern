<template>
    <h2>Tabs</h2>
    <div class="tabs">
        <TabItem @click="changeTab('Tab 1')" title="Tab 1">Tab 1 content</TabItem>
        <TabItem @click="changeTab('Tab 2')" title="Tab 2">Tab 2 content</TabItem>
        <TabItem @click="changeTab('Tab 3')" title="Tab 3">Tab 3 content</TabItem>
    </div>
</template>

<script>
import TabItem from '@/components/Tab/TabItem.vue';
import { ref, provide } from 'vue';

export default {
    name: 'Tab',
    components: {
        TabItem,
    },

    setup() {
        const tabTitle = ref('Tab 1');
        const changeTab = (tab) => {
            tabTitle.value = tab;
            console.log(tabTitle.value  )
        }

        provide('titleTab', tabTitle);

        return {
            changeTab
        }
    },
}
</script>