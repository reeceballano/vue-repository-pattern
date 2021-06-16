<template>
    <div class="user">
        {{ user }}
    </div>
</template>

<script>
export default {
    name: 'User',
    props: {
        user: {
            type: Object,
            default: () => {}
        }
    },
}
</script>

<style>

</style>