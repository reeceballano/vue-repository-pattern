<template>
    <div class="tab-content">
        {{ currentTab }}
        <slot />
    </div>
</template>

<script>
import { ref, computed, inject } from 'vue';
export default {
    name: 'TabItem',
    props: {
        title: {
            type: String
        }
    },
    setup(props) {
        const tabTitle = computed(() => {
            return props.title;
        });

        const currentTab = ref(inject('currentTab'));

        return {
            tabTitle,
            currentTab
        }
    },
}
</script>

<style scoped>

</style>