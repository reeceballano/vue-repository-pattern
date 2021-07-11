<template>
    <div ref="scrollComponent" class="post-list">
        <Post v-for="post in posts" :key="post.id" :post="post" />
        <div v-if="isLoading" class="text-center my-5">
            Loading...
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Post from '@/components/Post';
import { useStore } from 'vuex';

export default {
    name: 'PostList',
    components: {
        Post,
    },

    setup() {
        const store = useStore();

        const posts = computed(() => {
            return store.getters['post/getPosts']
        })

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
            isLoading,
            scrollComponent,
        }

    }
}
</script>
