<template>
    <div class="post-single custom-container">
        <div class="post-header py-10 border-b">
            <h2 class="text-3xl uppercase">{{ post.title }}</h2>

        </div>

        <div class="post-body py-10 border-b">
            <p class="text-lg">
                {{ post.body }}
            </p>
        </div>

        <div class="related-pst">
            <RelatedPosts :limit="5" />
        </div>
        
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { watch, computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import RelatedPosts from '@/components/RelatedPosts';

export default {
    name: 'Post',
    components: {
        RelatedPosts,
    },

    setup() {
        const route = useRoute();

        const store = useStore();

        const id = ref(computed(() => {
            return route.params.id;
        }));

        const fetchPost = () => {
            store.dispatch('post/fetchPost', Number(id.value));
        }

        const post = computed(() => {
            return store.getters['post/getPost'];
        })

        const posts = computed(() => {
            return store.getters['post/getPosts'];
        })

        watch(() => id.value, () => {
            return fetchPost()
        });

        onMounted(() => {
            fetchPost()
        })

        return {
            id,
            post,
            fetchPost,
            posts,
        }
    }
}
</script>

<style>

</style>