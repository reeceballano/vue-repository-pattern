<template>
    <div class="login">
        <section class="section">
            <div class="custom-container">
                <div class="h-full md:w-1/2 mx-auto p-10 rounded shadow-2xl bg-white">
                    <h2 class="text-2xl mb-5">Login</h2>
                    {{isLogged}}
                    <AlertBox alert-type="success">
                        Access granted!
                    </AlertBox>
                    <form @submit="checkLogin">
                        <div class="form-field">
                            <Input 
                                :showLabel="false"
                                :inputData="userInfo[0]" 
                                :modelValue="userInfo[0].value" 
                                @update:modelValue="userInfo[0].value = $event"

                            />
                        </div>

                        <div class="form-field">
                            <Input 
                                :showLabel="false"
                                :inputData="userInfo[1]" 
                                :modelValue="userInfo[1].value" 
                                @update:modelValue="userInfo[1].value = $event"

                            />

                        </div>

                        <PrimaryButton @button-click="checkLogin()" type="submit" css-style="bg-blue-500 hover:bg-blue-200 mt-5 text-white">
                            Login
                        </PrimaryButton>

                        <PrimaryButton type="link" route-to="/" css-style="bg-red-400 hover:bg-red-200 mt-5 ml-3 text-white">
                            Cancel
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { fieldType } from '../common/fieldType';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Input from '@/components/Inputs/Input';
import AlertBox from '@/components/AlertBox';

export default {
    name: 'LoginView',
    components: {
        PrimaryButton,
        Input,
        AlertBox
    },

    setup() {
        const store = useStore();

        const isLogged = computed(() => {
            return store.getters['login/getIsLogged'];
        })

        const userInfo = ref([
            { id: 'field-email', type: 'email', label: 'Email', value: '' },
            { id: 'field-password', type: 'password', label: 'Password', value: '' },
        ])

        /**
         * TEMP USER DATA
         */
        const userLogin = {
            email: 'superuser@locahost.dev',
            password: 'guesswhat'
        }

        /**
         * TODO
         * - check if valid email
         * - add error class
         * - add message box
         */

        const checkLogin = () => {
            const email = userInfo.value.filter(item => item.id === 'field-email');
            const password = userInfo.value.filter(item => item.id === 'field-password');

            if(!email[0].value.length && !password[0].value.length) { return console.log('please fill all the required fields') }

            if(email[0].value !== userLogin.email && password[0].value !== userLogin.password) { 
                console.log('access denied',email[0].value, password[0].value) 
            } else {
                console.log('access granted',password[0].value, password[0].value)
            }
        }

        return {
            userInfo,
            fieldType,
            userLogin,
            checkLogin,
            isLogged
        }
    }
}
</script>

<style>
.login-layout {
    @apply bg-gradient-to-r from-indigo-500 to-indigo-900;
}
</style>