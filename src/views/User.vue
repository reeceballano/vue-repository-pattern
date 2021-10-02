<template>
    <div class="user-info">
        <h2>User Info:</h2>
        
        <User :user="user"/> <hr />

        <Post v-for="post in userPosts" :key="post.id" :post="post" />
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import Post from '@/components/Post';
import User from '@/components/User';

export default {
    name: 'UserView',
    components: {
        Post,
        User
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