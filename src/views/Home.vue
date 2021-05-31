<template>
    <div class="home">
        {{ post }}
        <button @click="getPost">Get Post ID: 1</button>
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

        const post = computed(() => {
            return store.getters['post/getPost'];
        })

        const getPost = () => {
            store.dispatch('post/fetchPost', 1);
        }

        return {
            posts,
            getPost,
            post
        }
    }
}
</script>
