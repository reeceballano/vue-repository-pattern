<template>
    <div class="home">
        {{ post }}
        <button @click="getPost">Get Post ID: 1</button>
        
        <div v-if="isLoading">
            Loading...
        </div>

        <div v-else>
            <Post v-for="post in posts" :key="post.id" :post="post" />
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

        const getPost = () => {
            store.dispatch('post/fetchPost', 1);
        }

        const isLoading = computed(() => {
            return store.getters['post/getIsLoading'];
        })

        return {
            posts,
            getPost,
            post,
            isLoading,
        }
    }
}
</script>
