<template>
    <div class="home-content">
        <section class="intro-text">
            <div class="custom-container">
                <h2>
                    Third fish itself winged midst, days. Living great dry moving, together gathering had i likeness over give man third, let.
                </h2>

                <div class="btn-center-wrapper">
                    <SecondaryButton :outlined="true">
                        Contact
                    </SecondaryButton>

                    <SecondaryButton @buttonClick="exploreBtn()" css-style="text-white">
                        Explore
                    </SecondaryButton>
                </div>

            </div>
            
        </section>

        <!-- {{ post }}
        <button @click="getPost">Get Post ID: 1</button>

        <hr />

        <Add />
        
        <hr /> -->

        <section class="blog-list-section bg-gray-50">
            <div class="custom-container">
                <PostList  />
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
import { computed } from 'vue';
import { useStore } from 'vuex';
import PostList from '@/components/PostList';
import SecondaryButton from '../components/Buttons/SecondaryButton';
// import Add from '@/components/Add';

export default {
    name: 'Home',
    components: {
        PostList,
        SecondaryButton,
        // Add
    },

    setup() {
        const store = useStore();

        const post = computed(() => {
            return store.getters['post/getPost'];
        })

        const getPost = () => {
            store.dispatch('post/fetchPost', 1);
        }

        const exploreBtn = () => {
            console.log('exple btn');
        }

        return {
            getPost,
            post,
            exploreBtn
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
