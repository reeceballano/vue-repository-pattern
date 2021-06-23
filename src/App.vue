<template>
    <div class="app">
        <Header>
            <Nav />
        </Header>

        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import Header from '@/components/Header/Header';
import Nav from '@/components/Header/Nav';

export default {
    components: {
        Header,
        Nav,
    },

    setup() {
        const store = useStore();
        
        const route = useRoute();

        const layout = computed(() => {
            return (route.meta.layout || 'default-layout');
        }) 

        onMounted(() => {
            store.dispatch('post/fetchPosts');
        })        

        return {
            layout
        }
    },
}
</script>

<style lang="scss">

</style>
