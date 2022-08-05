<template>
    <section class="sub-footer">
        <div class="custom-container">
            <div class="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-4">
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
            { id: 1, verticalAlign: true, title: '', content: '<img class="h-20" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" />' },
            { id: 2, verticalAlign: '', title: 'Item 2', content: 'Item 2 content' },
            { id: 3, verticalAlign: '', title: 'Item 3', content: '<p>Item 3 <strong>content</strong></p>' },
            { id: 4, verticalAlign: '', title: 'Item 4', content: '<p>Item 4' },
        ])

        return {
            items
        }
    }
}
</script>

<style scoped>

</style>