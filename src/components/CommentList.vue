<template>
    <div class="comment-list">
        <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import Comment from '@/components/Comment';


export default {
    name: 'CommentList',
    components: {
        Comment,
    },

    props: {
        postId: {
            type: Number
        },

        commentData: {
            type: Object,
            default: () => {}
        }
    },

    async setup(props) {
        const postId = ref(props.postId);

        let fetchComments = new Promise((resolve) => {
                // const data = [
                //     { id: 1, postId: 1, name: 'user 1', body: 'comment 1 '},
                //     { id: 2, postId: 2, name: 'user 2', body: 'comment 2 '},
                // ]
        
                setTimeout(() => {
                    return resolve(props.commentData)
                }, 3000);
        })

        watch(postId, (newQuery, oldQuery) => {
            console.log('post id', newQuery, oldQuery);
        })

        const comments = ref(await fetchComments);

        return {
            comments,
        }
    }
}
</script>

<style>

</style>