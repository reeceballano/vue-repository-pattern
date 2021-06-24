<template>
    <router-link :to="link.link" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        {{ link.name }}
    </router-link>
</template>

<script>
export default {
    name: 'NavLink',
    props: {
        link: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style>

</style>