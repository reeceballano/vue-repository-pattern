<template>
    <div class="post-single custom-container">
        <div class="post-header py-10 border-b">
            <h2 class="text-3xl uppercase">{{ post.title }}</h2>

        </div>

        <div class="post-body py-10 border-b">
            <p class="text-lg">
                {{ post.body }}
            </p>

            <div class="comments-wrapper bg-gray-100 p-10 mt-10">
                <h3 class="uppercase m-5 font-semibold">Response</h3>
                <div class="comment-list">
                    <div v-for="comment in filteredComments(comments.data)" :key="comment.id" class="comment-item m-5 border-b pb-5">
                        {{ comment.body }}

                        <strong class="uppercase block text-sm">
                            - {{ comment.name }}
                        </strong>
                    </div>
                </div>
            </div>
        </div>

        <div class="related-pst">
            <RelatedPosts :limit="5" />
        </div>
        
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { watch, computed, onMounted } from 'vue';
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

        const fetchPost = () => {
            console.log('fetching test', Number(route.params.id))
            store.dispatch('post/fetchPost', Number(route.params.id));
        }

        const post = computed(() => {
            return store.getters['post/getPost'];
        })

        const posts = computed(() => {
            return store.getters['post/getPosts'];
        })

        const comments = computed(() => {
            return store.getters['comment/getComments'];
        })

        const filteredComments = (data) => {
            return data.filter(item => Number(item.postId) === Number(route.params.id));
        }

        watch(() => route.params.id, () => {
            //console.log(route.params.id)
            fetchPost()
        });

        onMounted(() => {
            fetchPost();
        })

        return {
            post,
            fetchPost,
            posts,
            filteredComments,
            comments,
        }
    }
}
</script>

<style>

</style>