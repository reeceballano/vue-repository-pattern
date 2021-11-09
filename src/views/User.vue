<template>
    <div class="user-info">
        <section class="section">
            <h2 class="text-2xl mb-5">User Info:</h2>
            <User :user="user"/>

            <Post v-for="post in userPosts" :key="post.id" :post="post" />
        </section>
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