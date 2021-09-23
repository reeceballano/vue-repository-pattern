<template>
    <section class="about">
        <div class="custom-container">
            <h1 class="text-2xl">This is an about page</h1>

            <div class="w-full h-0 my-10 border-b border-gray-400"></div>

            <Tabs>
                <TabItem v-for="(tab,i) in tabs" :title="tab.title" :tabIndex="i+1" :key="tab.id">{{ tab.content }}</TabItem>
            </Tabs>

            <div class="w-full h-0 my-10 border-b border-gray-400"></div>

            <Tabs :active-tab="2">
                <TabItem title="DESCRIPTION" :tabIndex="1">this is the description</TabItem>
                <TabItem title="SPECIFICATION" :tabIndex="2">this is the specification</TabItem>
                <TabItem title="FEATURES" :tabIndex="3">this is the features</TabItem>
            </Tabs>

        </div>
        
    </section>
</template>

<script>
import { ref } from 'vue';
import Tabs from '@/components/Tab/Tabs';
import TabItem from '@/components/Tab/TabItem';
export default {
    name: 'About',
    components: {
        Tabs,
        TabItem
    },  
    setup() {
        const tabs = ref([
            { id: 1, title: 'Tab 1', content: 'content for tab 1' },
            { id: 1, title: 'Tab 2', content: 'content for tab 2' },
            { id: 1, title: 'Tab 3', content: 'content for tab 3' },
        ])
        
        return {
            tabs
        }
    },
}
</script>
