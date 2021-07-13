<template>
    <div class="comment-list">
        <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
    </div>
</template>

<script>
import { ref } from 'vue';
import Comment from '@/components/Comment';

let fetchComments = new Promise((resolve) => {
        const data = [
            { id: 1, postId: 1, author: 'user 1', comment: 'comment 1 '},
            { id: 2, postId: 2, author: 'user 2', comment: 'comment 2 '},
        ]

        setTimeout(() => {
            return resolve(data)
        }, 3000);
})

export default {
    name: 'CommentList',
    components: {
        Comment,
    },

    async setup() {
        const comments = ref(await fetchComments);

        return {
            comments,
        }
    }
}
</script>

<style>

</style>