<template>
    <div class="tab-item">

        <div class="tab-title">
            {{ tabTitle }}
        </div>
        <div v-if="tabTitle == selectedTab" class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { ref, inject } from 'vue';
export default {
    name: 'TabItem',
    setup(props, context) {
        const tabTitle = ref(context.attrs.title);

        const selectedTab = inject('titleTab');

        return {
            tabTitle,
            selectedTab
        }
    },
}
</script>

<style scoped>

</style>