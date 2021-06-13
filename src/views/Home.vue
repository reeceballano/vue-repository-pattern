<template>
    <div class="home">
        {{ post }}
        <button @click="getPost">Get Post ID: 1</button>

        {{ paginate }}

        <hr />
        
        <input v-model="newpost" type="text" @keypress.enter="submitPost" placeholder="Create new Post" />

        <hr />
        
        <div v-if="isLoading">
            Loading...
        </div>

        <div v-else ref="scrollComponent">
            <Post v-for="post in posts" :key="post.id" :post="post" />
        </div>
    </div>
</template>

<script>
import Post from '@/components/Post';
import { useStore } from 'vuex';
import { computed, ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'Home',
    components: {
        Post
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

        const paginate = computed(() => {
            return store.getters['post/getPaginate'];
        })

        const handleScroll = async (e) => {
            e.preventDefault();
            let element = scrollComponent.value;
            if(element.getBoundingClientRect().bottom < window.innerHeight) {
                await store.dispatch('post/fetchPaginatedPosts');
            }
        }

        const scrollComponent = ref(null);

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        })

        return {
            posts,
            getPost,
            post,
            isLoading,
            newpost,
            submitPost,
            paginate,
            scrollComponent
        }
    }
}
</script>
