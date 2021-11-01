<template>
    <div class="sidebar  col-span-1 md:col-span-1">
        <section class="sidebar-title">
            <div class="pb-5 mb-5 border-b">
                <h2 class="text-2xl mb-5">Latest Posts</h2>
                <ul>
                    <li class="mb-2 pb-2 border-b last:border-0 border-gray-100" v-for="post in latestPosts" :key="post.id">
                        {{ post.title }}
                    </li>
                </ul>
            </div>

            <div class="pb-5 mb-5 border-b">
                <h2 class="text-2xl mb-5">Active Authors</h2>
                <User class="mb-2 pb-2 border-b last:border-0 border-gray-100" v-for="user in activeUsers" :key="user.id" :user="user">{{ user.name }}</User>
            </div>
        </section>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import User from '@/components/User';

export default {
    name: 'Sidebar',
    components: {
        User
    },

    setup() {
        const store = useStore();

        const latestPosts = computed(() => {
            const posts = store.getters['post/getAllPosts'];
            return posts.slice(0,5);
        })

        const activeUsers = computed(() => {
            const users = store.getters['user/getUsers'];
            return users.slice(0,5);
        })

        return {
            latestPosts,
            activeUsers,
        }    
    },
}
</script>