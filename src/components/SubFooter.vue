<template>
    <section class="sub-footer">
        <div class="custom-container">
            <div class="grid md:grid-cols-4 grid-cols-2 gap-4">
                <div
                    v-for="item in items"
                    :key="item.id"
                >
                    <SubFooterItem 
                        :item="item"
                        v-slot="{ item }"
                    >
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
            { id: 1, title: 'Item 1', content: 'Item 1 content' },
            { id: 2, title: 'Item 2', content: 'Item 2 content' },
            { id: 3, title: 'Item 3', content: '<p>Item 3 <strong>content</strong></p>' },
            { id: 4, title: 'Item 4', content: '<p>Item 4' },
        ])

        return {
            items
        }
    }
}
</script>

<style scoped>

</style>