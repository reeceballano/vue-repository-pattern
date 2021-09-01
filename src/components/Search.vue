<template>
    <div class="search-results absolute bg-white w-full left-0 top-16 p-10 z-50">
        <input v-model="search" type="text" placeholder="Search" class="searchInput w-full border border-gray-100 px-5 py-3 focus:outline-none focus:ring-1"/>

        <Post v-for="post in searchResults" :key="post.id" :post="post" /> 
    </div>

</template> 

<script>
import { ref, computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import Post from '@/components/Post';

export default {
    name: 'Search',

    props: {
        isFocus: {
            type: Boolean,
            default: false
        },
        count: {
            type: Number,
            default: 3
        }  
    },

    components: {
        Post,
    },

    setup(context) {
        const store = useStore();

        const search = ref('');

        let searchResults = ref(null);

        const setFocus = context;

        const resultCount = context;

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
                    searchResults.value = filtered.slice(0,resultCount.count);
                    break;
            }
        })

        watch(setFocus,(setFocus) => {
            if(setFocus.isFocus) {
                setTimeout(() => {
                    document.querySelector('.searchInput').focus(); // THIS IS NOT THE RIGHT WAY, I WILL REFACTOR THIS LATER
                },  100)
            }
        })

        onMounted(() => {
            store.dispatch('post/fetchPosts');
        })

        return {
            search,
            posts,
            searchResults,
            setFocus
        }
    },
}
</script>
