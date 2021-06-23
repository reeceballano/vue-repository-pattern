<template>
    <div class="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/users">Users</router-link>
        </div>

        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
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
