<template>
    <div class="comment-list">
        <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Comment from '@/components/Comment';


export default {
    name: 'CommentList',
    components: {
        Comment,
    },

    props: {
        commentData: {
            type: Object,
            default: () => {}
        }
    },

    async setup(props) {
        console.log(props.commentData)
        const comments = ref(null);

        let fetchComments = new Promise((resolve) => {
                // const data = [
                //     { id: 1, postId: 1, name: 'user 1', body: 'comment 1 '},
                //     { id: 2, postId: 2, name: 'user 2', body: 'comment 2 '},
                // ]
        
                setTimeout(() => {
                    comments.value = props.commentData;
                    resolve();
                }, 3500);
        })
        
        onMounted(() => {
            console.log('mounted')
        })
        
        await fetchComments;

        //const comments = ref(await fetchComments);

        return {
            comments,
        }
    }
}
</script>

<style>

</style>