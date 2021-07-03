<template>
    <div class="app">
        <Header>
            <Nav>
                <template v-slot:desktop>
                    <NavLink v-for="link in navLinks" :key="link.id" :link="link" />
                </template>

                <template v-slot:mobile>
                    <NavLink v-for="link in navLinks" :key="link.id" :link="link" />
                </template>
            </Nav>

            <Hero />
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
import NavLink from '@/components/Header/NavLink';
import Hero from '@/components/Header/Hero';

export default {
    components: {
        Header,
        Nav,
        NavLink,
        Hero,
    },

    setup() {
        const store = useStore();
        
        const route = useRoute();

        const layout = computed(() => {
            return (route.meta.layout || 'default-layout');
        }) 

        const navLinks = [
            { id: 1, name: 'Home', link: '/' },
            { id: 2, name: 'About', link: '/about' },
            { id: 3, name: 'Users', link: '/users' },
            { id: 4, name: 'Blog', link: '/' },
            { id: 5, name: 'Contact', link: '/' },
        ]

        onMounted(() => {
            store.dispatch('post/fetchPaginatedPosts');
        })        

        return {
            layout,
            navLinks
        }
    },
}
</script>

<style lang="scss">

</style>
