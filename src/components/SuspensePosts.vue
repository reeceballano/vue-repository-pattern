<template>
    <div class="suspense">
        <Comment v-for="comment in comments" :key="comment.id" :comment="comment"/>
        <AsyncComment v-for="comment in comments" :key="comment.id" :comment="comment"/>
    </div>
</template>

<script>
import ApiComments from '@/api/comments';
import { defineAsyncComponent } from 'vue';
//import Comment from '@/components/Comment';

const AsyncComment = defineAsyncComponent({
  loader: () => import("./Comment.vue" /* webpackChunkName: "comment" */),
  delay: 200,
  suspensible: false
});

export default {
    name: 'SuspensePosts',
    components: {
        AsyncComment,
        //Comment
    },
    async setup() {
        const { comments, fetchComments } = ApiComments();

        await fetchComments();
        
        return {
            comments
        }
    }
}
</script>

<style>

</style>