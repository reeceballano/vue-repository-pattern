<template>
    <div class="subfooter-item">
        <h2>{{item.title}}</h2>
        <slot v-bind:item="item.content"></slot>
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
    }
}
</script>

<style>

</style>