<template>
    <div class="post-item">
        {{ postData.id }} | {{ postData.title }}
        <button @click="deletePost">Delete</button>

        <input v-if="isEditing" v-model="postData.title" type="text" />

        <button v-if="!isEditing" @click="editPost">Edit</button>
        <button v-else @click="submitPost">Submit</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Post',
    props: {
        post: {
            type: Object,
            default: () => {}
        }
    },

    setup(props) {
        const store = useStore();

        const isEditing = ref(false);
        
        const postData = ref({
            id: props.post.id,
            title: props.post.title,
            body: props.post.body,
            userId: props.post.userId
        })

        const editPost = () => {
            isEditing.value = true;
        }

        const submitPost = () => {
            isEditing.value = false;
            store.dispatch('post/updatePost', postData.value);
        }

        const deletePost = () => {
            store.dispatch('post/deletePost', props.post.id);
        }

        return {
            isEditing,
            editPost,
            postData,
            submitPost,
            deletePost,
        }
    }
}
</script>

<style>
    .post-item {
        border-bottom: 1px solid #acacac;
        padding: 20px 10px;
    }
</style>