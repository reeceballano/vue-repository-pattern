<template>
    <div class="user">
        <h2>User Info:</h2>
        {{ user }} <hr />

        <Post v-for="post in userPosts" :key="post.id" :post="post" />
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import Post from '@/components/Post';

export default {
    name: 'User',
    components: {
        Post
    },

    setup() {
        const router = useRoute();
        const store = useStore();
        
        onMounted(() => {
            console.log(router.params.id);
            store.dispatch('user/fetchUser', router.params.id);
            store.dispatch('post/fetchUserPosts', router.params.id);
        })

        const user = computed(() => {
            return store.getters['user/getUser'];
        })

        const userPosts = computed(() => {
            return store.getters['post/getUserPosts'];
        })

        return {
            user,
            userPosts,
        }
    }
}
</script>

<style>

</style>