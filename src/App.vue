<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <router-view/>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        onMounted(() => {
            store.dispatch('post/fetchPaginatedPosts');
        })        
    },
}
</script>

<style lang="scss">

</style>
