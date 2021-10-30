<template>
    <div class="sidebar  col-span-1 md:col-span-1">
        <section class="sidebar-title">
            <div class="pb-5 mb-5 border-b">
                <h2 class="text-2xl mb-5">Latest Posts</h2>
                <ul>
                    <li v-for="post in latestPosts" :key="post.id">{{ post.title }}</li>
                </ul>
            </div>

            <div class="pb-5 mb-5 border-b">
                <h2 class="text-2xl mb-5">Active Author</h2>
                <ul>
                    <li>Author 1</li>
                    <li>Author 1</li>
                    <li>Author 1</li>
                    <li>Author 1</li>
                    <li>Author 1</li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    name: 'Sidebar',

    setup() {
        const store = useStore();
        const latestPosts = computed(() => {
            const posts = store.getters['post/getAllPosts'];
            return posts.slice(0, 3);
        })

        return {
            latestPosts
        }    
    },
}
</script>