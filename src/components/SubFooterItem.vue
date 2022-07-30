<template>
    <div class="subfooter-item">
        <h2>{{item.title}}</h2>
        <slot name="Item" />
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