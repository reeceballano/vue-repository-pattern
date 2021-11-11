<template>
    <section class="about">
        <div class="custom-container">
            <h1 class="text-2xl">This is an about page</h1>
            
            <Divider bg="blue" />

            <h2 class="text-xl mb-10">Tab Components</h2>

            <Tabs>
                <TabItem v-for="(tab,i) in tabs" icon="MoonIcon" :title="tab.title" :tab-index="i+1" :key="tab.id">{{ tab.content }}</TabItem>
            </Tabs>

            <Tabs :active-tab="2">
                <TabItem title="DESCRIPTION" icon="MenuAlt1Icon" :tab-index="1">this is the description</TabItem>
                <TabItem title="SPECIFICATION" icon="MenuAlt2Icon" :tab-index="2">this is the specification</TabItem>
                <TabItem title="FEATURES" icon="MenuAlt3Icon" :tab-index="3">this is the features</TabItem>
            </Tabs>

            <Divider bg="blue" />

            <h2 class="text-xl mb-10">Button Components</h2>

            <div class="grid grid-cols-4 gap-4">
                <PrimaryButton>
                    Primary Button
                </PrimaryButton>

                <PrimaryButton>
                    Another Button
                </PrimaryButton>

                <PrimaryButton>
                    Submit Button
                </PrimaryButton>

                <PrimaryButton>
                    Call Button
                </PrimaryButton>
            </div>

        </div>
        
    </section>
</template>

<script>
import { ref } from 'vue';
import Tabs from '@/components/Tab/Tabs';
import TabItem from '@/components/Tab/TabItem';
import Divider from '@/components/Divider';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

export default {
    name: 'About',
    components: {
        Tabs,
        TabItem,
        Divider,
        PrimaryButton
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
