<template>
    <div class="loading">
        <h3>
            <Icon :width="2" icon="RefreshIcon" />
            Loading...
        </h3>
    </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
    name: 'Loading',
    components: {
        Icon
    },

    setup() {
        return {
            
        }
    }
}
</script>

<style>

</style>