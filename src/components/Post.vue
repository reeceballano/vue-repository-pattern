<template>
    <div class="post-item">
        
        <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
            <div class="relative z-10 col-start-1 row-start-1 px-4 pb-3 bg-gradient-to-t from-black sm:bg-none">
                <p class="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">Category</p>
                <h2 class="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">{{ postData.title }}</h2>
            </div>

            <div class="col-start-1 row-start-2 px-4 sm:pb-6">
                <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
                    <div>Jul, 1, 2021</div>
                </div>
                <hr class="w-16 border-gray-300 hidden sm:block">
            </div>

            <div class="col-start-1 row-start-3 space-y-3 px-4">
                <p class="flex items-center text-black text-sm font-medium mb-5">
                    <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="" class="w-6 h-6 rounded-full mr-2 bg-gray-100">
                    Author: Choco
                </p>
                <button type="button" class="bg-indigo-100 text-indigo-700 text-base font-semibold px-6 py-2 rounded-lg">Read more</button>
            </div>

            <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
                <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
                    <div class="relative col-span-3 row-span-2 md:col-span-2">
                        <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
                    </div>
                    <div class="relative hidden md:block">
                        <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
                    </div>
                    <div class="relative hidden md:block">
                        <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
                    </div>
                </div>
            </div>
        </div>
        <!-- {{ postData.id }} | {{ postData.title }}
        <button @click="deletePost">Delete</button>

        <input v-if="isEditing" v-model="postData.title" type="text" />

        <button v-if="!isEditing" @click="editPost">Edit</button>
        <button v-else @click="submitPost">Submit</button> -->
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Post',
    props: {
        post: {
            type: Object,
            default: () => {}
        }
    },

    setup(props) {
        const store = useStore();

        const isEditing = ref(false);
        
        const postData = ref({
            id: props.post.id,
            title: props.post.title,
            body: props.post.body,
            userId: props.post.userId
        })

        const editPost = () => {
            isEditing.value = true;
        }

        const submitPost = () => {
            isEditing.value = false;
            store.dispatch('post/updatePost', postData.value);
        }

        const deletePost = () => {
            store.dispatch('post/deletePost', props.post.id);
        }

        return {
            isEditing,
            editPost,
            postData,
            submitPost,
            deletePost,
        }
    }
}
</script>

<style>
    .post-item {
        border-bottom: 1px solid #acacac;
        padding: 20px 10px;
    }
</style>