<template>
    <div class="tab-content">
        <slot v-if="tab == currentTab" />
    </div>
</template>

<script>
import { inject, computed } from 'vue';
export default {
    name: 'TabItem',
    props: {
        tabIndex: {
            type: Number
        }
    },
    setup(props, context) {
        const tab = computed(() => { return props.tabIndex});

        const { currentTab, registerChild } = inject('tab');

        const childAttributes = context.attrs.title;

        registerChild(childAttributes)


        return {
            tab,
            currentTab,
        }
    },
}
</script>

<style scoped>

</style>