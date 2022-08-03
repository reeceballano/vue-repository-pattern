<template>
    <div class="subfooter-item">
        <h2 v-if="item.title">{{item.title}}</h2>
        <div v-html="item.content"></div>
    </div>
</template>

<script>
export default {
    name: 'SubFooterItem',
    props: {
        item: {
            type: Object,
            required: true
        },
        yCenter: {
            type: Boolean,
            default: false
        }
    },

}
</script>

<style scoped>
    h2 {
        @apply text-xl font-medium mb-7 pb-3 border-b;
    }
</style>