<template>
    <div class="post-list">
        <Post v-for="post in posts" :key="post.id" :post="post" />

        <div class="pagination-wrapper flex gap-2 my-10">
            <button class="btn-blue-outlined" @click="prevPage">Prev</button>
            <button class="btn-blue-outlined" @click="nextPage">Next</button>

        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import Post from '@/components/Post';
import { useStore } from 'vuex';

export default {
    name: 'PostList',
    components: {
        Post,
    },

    setup() {
        const store = useStore();

        const posts = computed(() => {
            return store.getters['post/getPosts']
        })

        const nextPage = () => {
            store.dispatch('post/updatePagination', '+');
        }

        const prevPage = () => {
            store.dispatch('post/updatePagination', '-');
        }

        const pagination = computed(() => {
            return store.getters['post/getPaginate'];
        })

        return {
            posts,
            nextPage,
            prevPage,
            pagination,
        }

    }
}
</script>
