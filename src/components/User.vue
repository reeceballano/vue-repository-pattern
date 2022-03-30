<template>
    <div class="user">
        <router-link :to="{ name: 'User', params: { uid: updatedUserData.id } }">
            <div class="user-item">
                <div class="user-image">
                    <Image css-style="rounded-full" :alt="updatedUserData.name" :imgSrc="updatedUserData.image" />
                </div>
                <span class="user-name">{{ updatedUserData.name }}</span>
                <span class="user-email">{{ updatedUserData.email }}</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { computed } from 'vue';
import profileImage from '../api/profileImage';
import Image from './Image';

export default {
    name: 'User',
    props: {
        user: {
            type: Object,
            default: () => {}
        }
    },
    components: {
        Image
    },

    setup(props) {
        const updatedUserData = computed(() => {
            const user = {...props.user, image: profileImage(props.user.id) };
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