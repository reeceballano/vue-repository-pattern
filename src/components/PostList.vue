<template>
    <div ref="postWrapper" class="post-list">
        <Loading v-if="isLoading" />
        <Post v-else v-for="post in posts" :key="post.id" :post="post" />

        <div class="pagination-wrapper my-10">
            Current Page: {{pagination.current}} / {{ lastPage }}
            <div class="flex gap-2 my-5">
            <SecondaryButton :disabled="pagination.start === 0" :class="{ 'disabled-btn': pagination.start  === 0 }" class="btn-blue-outlined" @click="prevPage">Prev</SecondaryButton>
            <button :disabled="pagination.current === lastPage" :class="{ 'disabled-btn': pagination.current === lastPage }" class="btn-blue-outlined" @click="nextPage">Next</button>
            </div>
        </div>
    </div>
</template>

<script>
/***
 * TODO
 * - REUSE BUTTON COMPONENT
 */
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import Post from '@/components/Post';
import Loading from '@/components/Loading';
import SecondaryButton from '@/components/Buttons/SecondaryButton';

export default {
    name: 'PostList',
    components: {
        Post,
        Loading,
        SecondaryButton
    },

    setup() {
        const store = useStore();

        const posts = computed(() => {
            return store.getters['post/getPosts']
        })

        const nextPage = () => {
            store.dispatch('post/updatePagination', '+');
            btnClick();
        }

        const prevPage = () => {
            store.dispatch('post/updatePagination', '-');
            btnClick();
        }

        const lastPage = computed(() => {
            return store.getters['post/getPaginate'].last_page;
        })

        const isLoading = computed(() => {
            return store.getters['post/getIsLoading'];
        })

        const pagination = computed(() => {
            return store.getters['post/getPaginate'];
        })

        const isClick = ref(false);

        const postWrapper = ref(null);

        const btnClick = () => {
            /** 
             * AFTER CLICK SET isClick to TRUE
             * 
             * WATCH THE isLoading VALUE. IF isLoading is FALSE (loading of posts is complete) SET THE isClick
             * VALUE TO INITIAL STATE (false)
             * 
             * WATCH THE isClick VALUE. IN THE FIRST WATCH, WE WATCH THE VALUE OF isLoading THIS IS SOMETHING LIKE
             * ASYNCHRONOS. IF THE isLoading VALUE IS FALSE (loading of posts is complete) THEN WE WILL SET THE VALUE 
             * OF isClick TO FALSE. THEN TRIGGER THE scrollIntoView FUNTION
             * 
            */
            isClick.value = true;
        }

        watch(
            () => isLoading.value, 
            () => {
                // WATCH isLoading VALUE IF FALSE SET isClick TO FALSE TO GO BACK TO INITIAL STATE
                if(isLoading.value == false) {
                    isClick.value = false;
                }
            }, {
            // lazy: true // immediate: false
            }
        )

        watch(
            () => isClick.value, 
            () => {
                // WATCH THE BUTTON CLICKED, THEN SCROLL TO TOP
                if(isClick.value == false ) {
                    setTimeout(() => {
                        postWrapper.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100)
                }
            }, {
            //lazy: true // immediate: false
            }
        )

        return {
            posts,
            nextPage,
            prevPage,
            pagination,
            lastPage,
            isLoading,
            postWrapper,
            isClick
        }

    }
}
</script>
