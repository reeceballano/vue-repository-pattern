<template>
    <div class="home">

        {{ post }}
        <button @click="getPost">Get Post ID: 1</button>
        
        <hr />

        CURRENT PAGE: {{ currentPage }}

        <Post v-for="post in posts" :key="post.id" :post="post" />

        <div class="pagination-wr">
            <button @click="prevPosts" :disabled="(currentPage.start === 0)">Prev</button>
            <button @click="nextPosts" :disabled="isEndPost">Next {{ isEndPost }}</button>
        </div>
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

        const currentPage = computed(() => {
            return store.getters['post/getCurrentPage'];
        })

        const isEndPost = computed(() => {
            return store.getters['post/getEndPost'];
        })

        const getPost = () => {
            store.dispatch('post/fetchPost', 1);
        }

        const prevPosts = () => {
            store.dispatch('post/paginatePost', 'prev');
        }

        const nextPosts = () => {
            return store.dispatch('post/paginatePost', 'next');
        }

        return {
            posts,
            getPost,
            post,
            prevPosts,
            nextPosts,
            currentPage,
            isEndPost
        }
    }
}
</script>
