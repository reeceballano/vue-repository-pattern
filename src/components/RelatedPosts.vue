<template>
    <div class="related-posts container">
        <h2>Related Posts</h2>
        <Post v-for="post in relatedPosts" :key="post.id" :post="post" />
    </div>
</template>

<script>
import Post from '@/components/Post';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    name: 'RelatedPosts',
    components: {
        Post,
    },

    setup() {
        const store = useStore();

        const relatedPosts = computed(() => {
            return store.getters['post/getPosts'];
        })

        return {
            relatedPosts,
        }
    }
}
</script>

<style>

</style>