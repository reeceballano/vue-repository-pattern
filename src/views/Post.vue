<template>
    <section class="post-single">
        <div class="post-header pb-10 border-b">
            <h2 class="text-3xl uppercase">{{ post.title }}</h2>

        </div>

        <div class="post-body py-10 border-b">
            <p class="text-lg">
                {{ post.body }}
            </p>

            <div class="comments-wrapper bg-gray-100 p-10 mt-10">
                <h3 class="uppercase m-5 font-semibold">Response</h3>
                <div class="suspense-comments">
                    *ON DEVELOPMENT
                    <Suspense>
                        <template #default>
                            <CommentList :key="post.id" :commentData="filteredComments(comments.data)" />
                        </template>

                        <template #fallback>
                            Loading comments...
                        </template>
                    </Suspense>
                </div>

                <!-- <hr />

                <div class="comment-list">
                    <div v-for="comment in filteredComments(comments.data)" :key="comment.id" class="comment-item m-5 border-b pb-5">
                        {{ comment.body }}

                        <strong class="uppercase block text-sm">
                            - {{ comment.name }}
                        </strong>
                    </div>
                </div> -->
                
            </div>
        </div>


        <div class="related-pst">
            <RelatedPosts :limit="5" />
        </div>

        
    </section>
</template>

<script>
import { useRoute } from 'vue-router';
import { watch, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import RelatedPosts from '@/components/RelatedPosts';
import CommentList from '@/components/CommentList';

export default {
    name: 'Post',
    components: {
        RelatedPosts,
        CommentList
    },

    setup() {
        const route = useRoute();

        const store = useStore();

        const fetchPost = () => {
            console.log('fetching post', Number(route.params.id))
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

        onMounted(() => {
            fetchPost();
        })

        watch(() => route.params.id, (current) => {
            if(current != undefined) {
                fetchPost()
            }
        });


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