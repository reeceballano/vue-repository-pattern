<template>
    <nav class="bg-gray-600 z-40">
        <div class="custom-container">
            <div class="relative flex items-center justify-between h-16">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <!--
                        Icon when menu is closed.

                        Heroicon name: outline/menu

                        Menu open: "hidden", Menu closed: "block"
                    -->
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <!--
                        Icon when menu is open.

                        Heroicon name: outline/x

                        Menu open: "block", Menu closed: "hidden"
                    -->
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>

                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex-shrink-0 flex items-center">
                        <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
                        <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">
                    </div>
                    
                    <div class="hidden sm:block sm:ml-6 sm:mt-1.5">
                        <div class="flex space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <slot name="desktop"></slot>
                        </div>
                    </div>

                    <div class="user-utility md:w-full md:text-right md:block hidden sm:mt-1.5">
                        <PrimaryButton @button-click="logout" css-style="h-10 uppercase text-sm text-white bg-indigo-500 hover:bg-blue-200" type="link" :routeTo="(isLogged) ? '' : '/login'">
                            <span v-if="isLogged">
                                <span v-if="!isClick">Logout</span>
                                <Loading v-else text="Logging out" />
                            </span>
                            <span v-else>Login</span>
                        </PrimaryButton>

                        <PrimaryButton v-if="!isLogged" css-style="h-10 uppercase ml-2 text-sm text-white bg-red-500 hover:bg-red-200" type="link" routeTo="/register">
                            Register
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <slot name="mobile"></slot>
            </div>
        </div>
    </nav>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import Loading from '@/components/Loading';

export default {
    name: 'MainNav',
    components: {
        PrimaryButton,
        Loading
    },

    setup() {
        const store = useStore();
        
        const router = useRouter();

        const isClick = ref(false);

        const isLogged = computed(() => {
            return store.getters['login/getIsLogged'];
        });

        const logout = () => {
            isClick.value = true;

            setTimeout(() => {
                store.dispatch('login/logout');
                router.push('/login');
                isClick.value = false;
            },3000)
        }


        return {
            isLogged,
            logout,
            isClick
        }
    }
}
</script>

<style lang="scss">

</style>