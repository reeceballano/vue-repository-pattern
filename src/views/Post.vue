<template>
    <div class="post-single">
        <h2>Post Info</h2>
        <hr />
        ID: {{ id }}
        <br />

        {{ post }}

        <hr />

        <ul>
            <li v-for="post in posts" :key="post.id">
                <router-link :to="{ name: 'Post', params: { id: post.id } }">
                    {{ post.id }}:  {{ post.title }}
                </router-link>
            </li>
        </ul>


        
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { watch, computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Post',
    
    setup() {
        const route = useRoute();

        const store = useStore();

        const id = ref(computed(() => {
            return route.params.id;
        }));

        const fetchPost = () => {
            store.dispatch('post/fetchPost', Number(id.value));
        }

        const post = computed(() => {
            return store.getters['post/getPost'];
        })

        const posts = computed(() => {
            return store.getters['post/getPosts'];
        })

        watch(() => id.value, () => {
            return fetchPost()
        });

        onMounted(() => {
            fetchPost()
        })

        return {
            id,
            post,
            fetchPost,
            posts,
        }
    }
}
</script>

<style>

</style>