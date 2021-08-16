<template>
    <div class="post-list">
        <Post v-for="post in posts" :key="post.id" :post="post" />

        <div class="pagination-wrapper my-10">
            Current Page: {{pagination.current}} / {{ lastPage }}
            <div class="flex gap-2 my-5">
            <button :disabled="pagination.start === 0" :class="{ 'disabled-btn': pagination.start  === 0 }" class="btn-blue-outlined" @click="prevPage">Prev</button>
            <button :disabled="pagination.current === lastPage" :class="{ 'disabled-btn': pagination.current === lastPage }" class="btn-blue-outlined" @click="nextPage">Next</button>
            </div>
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

        const lastPage = computed(() => {
            return store.getters['post/getPaginate'].last_page;
        })

        const pagination = computed(() => {
            return store.getters['post/getPaginate'];
        })

        return {
            posts,
            nextPage,
            prevPage,
            pagination,
            lastPage
        }

    }
}
</script>
