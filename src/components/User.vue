<template>
    <div class="user">
        <router-link :to="{ name: 'User', params: { uid: updatedUserData.id } }">
            <div class="user-item">
                <div class="user-image"><img :src="updatedUserData.image" /></div>
                <span class="user-name">{{ updatedUserData.name }}</span>
                <span class="user-email">{{ updatedUserData.email }}</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { computed } from 'vue';
export default {
    name: 'User',
    props: {
        user: {
            type: Object,
            default: () => {}
        }
    },

    setup(props) {
        const updatedUserData = computed(() => {
            const user = {...props.user, image: `https://i.pravatar.cc/150?u=${props.user.id}` };
            return user;
        })

        console.log(updatedUserData.value)

        return {
            updatedUserData
        }
    }
}
</script>

<style scoped>
    .user-item {
        @apply flex flex-col gap-1 bg-gray-100 p-5 rounded-2xl break-words;
    }

    .user-image {
        @apply h-10 w-10 bg-gray-400 rounded-full;
    }
</style>