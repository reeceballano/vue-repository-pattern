<template>
    <div class="search-results absolute bg-white w-full left-0 top-16 p-10 z-50">
        <input v-model="search" type="text" placeholder="Search" class="w-full border border-gray-100 px-5 py-3 focus:outline-none focus:ring-1"/>

        <Post v-for="post in searchResults" :key="post.id" :post="post" /> 
    </div>

</template> 

<script>
import { ref, computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import Post from '@/components/Post';

export default {
    name: 'Search',

    components: {
        Post,
    },

    setup() {
        const store = useStore();

        const search = ref('');

        let searchResults = ref(null);

        const posts = computed(() => {
            return store.getters['post/getAllPosts'];
        })

        watch(search, (search) => {
            const filtered = store.getters['post/getAllPosts'].filter(item => item.title.includes(search));

            switch(search.length) {
                case 0:
                    searchResults.value = null;
                    break;

                default:
                    searchResults.value = filtered;
                    break;
            }
        })

        onMounted(() => {
            store.dispatch('post/fetchPosts');
        })

        return {
            search,
            posts,
            searchResults
        }
    },
}
</script>
