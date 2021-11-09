<template>
    <div class="app">
        <Header>
            <Nav :class="[(isFixed) ? 'fixed w-full' : '']">
                <template v-slot:desktop>
                    <NavLink v-for="link in navLinks" :key="link.id" :link="link" />

                    <a @click.prevent="isSearch = !isSearch" href="#" class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </a>

                    <Search v-show="isSearch" :isFocus="isSearch" :count="5" />
                </template>

                <template v-slot:mobile>
                    <NavLink v-for="link in navLinks" :key="link.id" :link="link" />
                </template>

            </Nav>

            <Hero :header="headerLayout" />
        </Header>

        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>
import { onMounted, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import Header from '@/components/Header/Header';
import Nav from '@/components/Header/Nav';
import NavLink from '@/components/Header/NavLink';
import Hero from '@/components/Header/Hero';
import Search from '@/components/Search';

export default {
    components: {
        Header,
        Nav,
        NavLink,
        Hero,
        Search
    },

    setup() {
        const store = useStore();
        
        const route = useRoute();

        const layout = computed(() => {
            return (route.meta.layout || 'default-layout');
        })
        
        const headerLayout = computed(() => {
            return (route.meta.header || 'half');
        })

        const navLinks = [
            { id: 1, name: 'Home', link: '/' },
            { id: 2, name: 'About', link: '/about' },
            { id: 3, name: 'Users', link: '/users' },
        ]

        const isSearch = ref(false);

        const isFixed = ref(false);

        const onScroll = () => {
            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                if(scrollY > 200) {
                    isFixed.value = true;
                } else {
                    isFixed.value = false;
                }
            })
        }

        onMounted(() => {
            store.dispatch('post/fetchPaginatedPosts');
            store.dispatch('comment/fetchComments');
            store.dispatch('user/fetchUsers');
            onScroll();
        })    

        return {
            layout,
            navLinks,
            isSearch,
            headerLayout,
            isFixed
        }
    },
}
</script>

<style lang="scss">

</style>
