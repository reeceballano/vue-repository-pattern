<template>
    <div v-show="tab == currentTab" class="tab-content px-5 py-8">
        <slot />
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

        const childAttributes = context.attrs;

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