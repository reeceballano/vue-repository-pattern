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

        <section class="blog-list-section bg-gray-50">
            <div class="custom-container">
                <PostList  />
            </div>
        </section>

        <section>
            <div class="custom-container">
                <h1>Next Section</h1>

                <Tabs :tabsProp="tabs">
                    <TabItem v-for="tab in tabs" :title="tab.title" :key="tab.id">{{ tab.content }}</TabItem>
                </Tabs>
            </div>
        </section>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import PostList from '@/components/PostList';
import Tabs from '@/components/Tab/Tabs';
import TabItem from '@/components/Tab/TabItem';
// import Add from '@/components/Add';

export default {
    name: 'Home',
    components: {
        PostList,
        Tabs,
        TabItem
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

        const tabs = ref([
            { id: 1, title: 'Tab 1', content: 'content for tab 1' },
            { id: 1, title: 'Tab 2', content: 'content for tab 2' },
            { id: 1, title: 'Tab 3', content: 'content for tab 3' },
        ])

        return {
            getPost,
            post,
            tabs
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
