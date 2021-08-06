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
    props: {
        limit: {
            type: Number,
            default: 3
        }
    },
    components: {
        Post,
    },

    setup(props) {
        const store = useStore();

        const relatedPosts = computed(() => {
            const posts = store.getters['post/getPosts'];
            const limit = posts.slice(0, props.limit);

            return limit;
        })

        return {
            relatedPosts,
        }
    }
}
</script>

<style>

</style>