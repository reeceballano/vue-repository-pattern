<template>
    <div class="user">
        <router-link :to="{ name: 'User', params: { id: user.id } }">
            {{ user.id }}: {{ user.name }}
        </router-link>
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

    setup() {

    }
}
</script>

<style>

</style>