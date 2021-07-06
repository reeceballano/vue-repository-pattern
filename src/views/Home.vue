<template>
    <div class="home-content">
        <section class="intro-text">
            <div class="custom-container">
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

            </div>
            
        </section>

        <!-- {{ post }}
        <button @click="getPost">Get Post ID: 1</button>

        <hr />

        <Add />
        
        <hr /> -->
        <section ref="scrollComponent" class="blog-list-section bg-gray-50">
            <div class="custom-container">
                <Post v-for="post in posts" :key="post.id" :post="post" />

                <div v-if="isLoading" class="text-center my-5">
                    Loading...
                </div>
            </div>
        </section>

        <section>
            <div class="custom-container">
                <h1>Next Section</h1>
            </div>
        </section>
    </div>
</template>

<script>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import Post from '@/components/Post';
// import Add from '@/components/Add';

export default {
    name: 'Home',
    components: {
        Post,
        // Add
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

        const noData = computed(() => {
            return store.getters['post/getNoData'];
        })

        const scrollComponent = ref(null);

        const handleScroll = async () => {
            let element = scrollComponent.value;

            if(element.getBoundingClientRect().bottom < window.innerHeight) {
                if(!noData.value) {
                    await store.dispatch('post/fetchPaginatedPosts');
                }
            }
        }

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
            scrollComponent
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
