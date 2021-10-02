<template>
    <div class="user">
        {{ userData }}
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'TestUser',
    props: {
        user: {
            type: Object,
            default: () => {}
        }
    },

    setup(props) {
        const userData = ref(props.user);

        return {
            userData
        }
    }
}
</script>

<style scoped>
    .user-item {
        @apply flex flex-col gap-1 bg-gray-100 p-5 rounded-2xl;
    }

    .user-image {
        @apply h-10 w-10 bg-gray-400 rounded-full;
    }
</style>