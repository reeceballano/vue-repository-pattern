<template>
    <div class="home-content">
        <section class="custom-container intro-text">
            <h2>
                Third fish itself winged midst, days. Living great dry moving, together gathering had i likeness over give man third, let.
            </h2>

            <div class="btn-center-wrapper">
                <button class="btn-blue-outlined">
                    Contact
                </button>

                <button class="btn-blue">
                    Explore
                </button>
            </div>
            
        </section>




        {{ post }}
        <button @click="getPost">Get Post ID: 1</button>

        <hr />

        <Add />
        
        <hr />
        
        <div v-if="isLoading">
            Loading...
        </div>

        <div v-else>
            <Post v-for="post in posts" :key="post.id" :post="post" />
        </div>
    </div>
</template>

<script>
import Post from '@/components/Post';
import { useStore } from 'vuex';
import { computed } from 'vue';
import Add from '@/components/Add';

export default {
    name: 'Home',
    components: {
        Post,
        Add
    },

    setup() {
        const store = useStore();

        const posts = computed(() => {
            return store.getters['post/getPosts']
        })

        const post = computed(() => {
            return store.getters['post/getPost'];
        })

        const getPost = () => {
            store.dispatch('post/fetchPost', 1);
        }

        const isLoading = computed(() => {
            return store.getters['post/getIsLoading'];
        })

        return {
            posts,
            getPost,
            post,
            isLoading,
        }
    }
}
</script>

<style scoped lang="scss">
    .intro-text {
        h2 {
            @apply text-center text-center md:text-4xl text-2xl leading-10;
        }
    }
</style>
