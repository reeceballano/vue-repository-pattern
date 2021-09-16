<template>
    <div class="tab-content">
        <slot />
    </div>
</template>

<script>
import { computed } from 'vue';
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

        return {
            tabTitle
        }
    },
}
</script>

<style scoped>

</style>