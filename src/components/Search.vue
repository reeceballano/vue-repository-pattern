<template>
    <div class="search-container">
        <div @click.prevent="closeSearch" class="search-overlay absolute top-0 w-full h-screen left-0"></div>
        <div class="search-results absolute bg-white w-full left-0 top-16 p-10 z-50 overflow-y-auto max-h-96 shadow-2xl rounded-b-lg">
            <input v-model="search" type="text" placeholder="Search" class="searchInput w-full border border-gray-100 px-5 py-3 focus:outline-none focus:ring-1"/>

            <Post v-for="post in searchResults" :key="post.id" :post="post" /> 
        </div>
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

    setup(props, context) {
        const store = useStore();

        console.log(props.isFocus)

        const search = ref('');

        let searchResults = ref(null);

        const setFocus = computed(() => { return props.isFocus });

        const closeSearch = () => {
            context.emit('closeSearch');
        }

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
                    searchResults.value = filtered.slice(0,props.count);
                    break;
            }
        })

        const setFocusSearchbox = () => {
            if(setFocus.value) {
                setTimeout(() => {
                    document.querySelector('.searchInput').focus(); // THIS IS NOT THE RIGHT WAY, I WILL REFACTOR THIS LATER
                },  50)
            }
        }

        onMounted(() => {
            store.dispatch('post/fetchPosts');
            setFocusSearchbox();
        })

        return {
            search,
            posts,
            searchResults,
            setFocus,
            closeSearch
        }
    },
}
</script>

<style scoped>
.search-results::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

.search-results::-webkit-scrollbar {
	width: 5px;
	background-color: #F5F5F5;
}

.search-results::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>