<template>
    <div class="add-post">
        <input v-model="newpost" type="text" @keypress.enter="submitPost" placeholder="Create new Post" />
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
    setup() {
        const store = useStore();

        const newpost = ref('');

        const submitPost = () => {
            const post = {
                title: newpost.value,
                body: 'test post',
                userId: 1
            }

            store.dispatch('post/createPost', post);
            newpost.value = '';
        }

        return {
            newpost,
            submitPost,
        }
    }
}
</script>

<style>

</style>