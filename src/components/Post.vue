<template>
    <div class="post-item border-b border-gray-200 sm:py-12 md:py-16 pb-10 mb-10">
        
        <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
            <div class="py-10 px-5 md:px-0 md:py-0 relative z-10 col-start-1 row-start-1 pb-3 bg-gradient-to-t from-black sm:bg-none">
                <p class="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">Category</p>
                <Title>
                    <router-link :to="{ name: 'Post', params: { id:postData.id } }">{{ postData.id }}:  {{ postData.title }}</router-link>
                </Title>
            </div>

            <div class="col-start-1 row-start-2 sm:pb-6">
                <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
                    <div>Jul, 1, 2021</div>
                </div>
                <hr class="w-16 border-gray-300 hidden sm:block">
            </div>

            <div class="col-start-1 row-start-3 space-y-3">
                <p class="flex items-center text-black text-sm font-medium mb-5">
                    <Image :src="profileImage(user.id)" :alt="user.name" style="w-6 h-6 rounded-full mr-2 bg-gray-100" />
                    Author: {{ user.name }}
                </p>
                
                <PrimaryButton css-style="bg-blue-400 hover:bg-blue-200" :show-icon="true" route-to="Post" :button-params="{ id: postData.id }">
                    Read more
                </PrimaryButton>    

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

        <!-- <div class="grid sm:grid-cols-2 grid-cols-1 gap-10">
            <div class="col-span-1 row-start-2 sm:row-start-1">
                <p class="font-extralight uppercase text-xs">
                    Category
                </p>

                <h2 class="md:text-2xl font-semibold my-3">dolorem eum magni eos aperiam quia</h2>

                <p class="font-semibold uppercase text-xs">
                    Jul, 1, 2021
                </p>

                <div class="w-12 my-5 bg-gray-400 h-px "></div>

                <p class="font-semibold uppercase text-xs">
                    Author: Juan dela Cruz
                </p>

                <button class="bg-indigo-300 rounded py-3 my-7 px-7 text-sm hover:bg-indigo-400 delay-150 hover:transition-all ">
                    Read more
                </button>


            </div>

            <div class="col-span-1 md:order-2 order-1">
                <img class="rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="">
            </div>
        </div> -->

        <!-- {{ postData.id }} | {{ postData.title }}
        <button @click="deletePost">Delete</button>

        <input v-if="isEditing" v-model="postData.title" type="text" />

        <button v-if="!isEditing" @click="editPost">Edit</button>
        <button v-else @click="submitPost">Submit</button> -->
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Title from '@/components/Title';
import profileImage from '../api/profileImage';
import Image from '@/components/Image';

export default {
    name: 'Post',
    props: {
        post: {
            type: Object,
            default: () => {}
        }
    },
    components: {
        PrimaryButton,
        Title,
        Image
    },

    setup(props) {
        const store = useStore();

        const isEditing = ref(false);
        
        const postData = ref(props.post)

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

        const fetchUser = () => {
            const users = store.getters['user/getUsers'];
            const res = [...users].find(user => user.id === postData.value.userId);
            user.value = res;
        }

        const user = ref({});

        onMounted(() => {
            fetchUser();
        })

        return {
            isEditing,
            editPost,
            postData,
            submitPost,
            deletePost,
            fetchUser,
            user,
            profileImage
        }
    }
}
</script>

