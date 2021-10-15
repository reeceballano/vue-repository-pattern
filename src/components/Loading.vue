<template>
    <div class="loading">
        <h3 class="flex items-center">
            <Icon :width="4" :icon="`${icon}Icon`" animation="animate-spin" />
            Loading...
        </h3>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Icon from '@/components/Icon';

export default {
    name: 'Loading',
    components: {
        Icon
    },

    setup() {
        const store = useStore();

        const icon = computed(() => {
            return store.getters['loading/getIcon'];
        })

        console.log(icon.value)

        return {
            icon,    
        }
    }
}
</script>

<style>

</style>