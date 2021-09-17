<template>
    <div class="tab-content">
        <slot v-if="tab == currentTab" />
    </div>
</template>

<script>
import { ref, inject, computed } from 'vue';
export default {
    name: 'TabItem',
    props: {
        tabIndex: {
            type: Number
        }
    },
    setup(props) {
        const tab = computed(() => { return props.tabIndex});

        // const tabIdx = inject('currentTab');

        const currentTab = ref(inject('currentTab'));

        return {
            tab,
            currentTab
        }
    },
}
</script>

<style scoped>

</style>