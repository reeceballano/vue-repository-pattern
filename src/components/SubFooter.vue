<template>
    <section class="sub-footer">
        <div class="custom-container">
            <div class="grid grid-cols-4 gap-4">
                <SubFooterItem 
                    v-for="item in items"
                    :key="item.id"
                    :item="item"
                >
                    <template #Item>
                        {{item.content}}
                    </template> 
                </SubFooterItem>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
import SubFooterItem from '@/components/SubFooterItem';

export default {
    name: 'SubFooter',
    components: {
        SubFooterItem
    },
    setup() {
        const items = ref([
            { id: 1, name: 'Item1', title: 'Item 1', content: 'Item 1 content' },
            { id: 2, name: 'Item2', title: 'Item 2', content: 'Item 2 content' },
            { id: 3, name: 'Item3', title: 'Item 3', content: 'Item 3 content' },
        ])

        return {
            items
        }
    }
}
</script>

<style scoped>
    h2 {
        @apply text-xl font-medium;
    }
</style>