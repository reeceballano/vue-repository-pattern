<template>
    <div class="user-info">
        <div class="py-5">
            <h2>User Info:</h2>
            <User :user="user"/>
        </div>

        <Post v-for="post in userPosts" :key="post.id" :post="post" />
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { onMounted, computed, watch } from 'vue';
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
        

        const fetchUserInfo = () => {
            store.dispatch('user/fetchUser', router.params.uid);
            store.dispatch('post/fetchUserPosts', router.params.uid);
        }

        const user = computed(() => {
            return store.getters['user/getUser'];
        })

        const userPosts = computed(() => {
            return store.getters['post/getUserPosts'];
        })
        
        onMounted(() => {
            console.log(router.params.uid);
            fetchUserInfo();
        })

        watch(() => router.params.uid, (current) => {
            if(typeof current !== 'undefined') {
                fetchUserInfo();
                console.log('user changed', router.params.uid)
            }
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