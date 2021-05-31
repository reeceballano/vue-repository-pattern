<template>
    <div class="home">
        <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script>
import Post from '@/components/Post';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    name: 'Home',
    components: {
        Post
    },

    setup() {
        const store = useStore();

        const posts = computed(() => {
            return store.getters['post/getPosts']
        })

        return {
            posts
        }
    }
}
</script>
