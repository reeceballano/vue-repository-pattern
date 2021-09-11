<template>
    <div class="user">
        <router-link :to="{ name: 'User', params: { id: user.id } }">
            <div class="user-item">
                <div class="user-image"></div>
                <span class="user-name">{{ user.name }}</span>
                <span class="user-email">{{ user.email }}</span>
            </div>
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

<style scoped>
    .user-item {
        @apply flex flex-col gap-1 my-10;
    }

    .user-image {
        @apply h-10 w-10 bg-gray-400 rounded-full;
    }
</style>