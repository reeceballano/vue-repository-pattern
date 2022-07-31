<template>
    <section class="sub-footer">
        <div class="custom-container">
            <div class="grid grid-cols-4 gap-4">
                <div
                    v-for="item in items"
                    :key="item.id"
                >
                    <SubFooterItem 
                        :item="item"
                        v-slot="{ item }"
                    >
                        <div><strong>Content:</strong> {{ item }}</div>
                    </SubFooterItem>
                </div>
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
            { id: 3, name: 'Item3', title: 'Item 3', content: '<p>Item 3 <strong>content</strong></p>' },
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