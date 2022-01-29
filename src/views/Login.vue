<template>
    <div class="login">
        <section class="section">
            <div class="custom-container">
                <div class="h-full md:w-1/2 mx-auto p-10 rounded shadow-2xl bg-white">
                    <h2 class="text-2xl mb-5">Login</h2>
                    isLogged: {{ isLogged }}
                    <form @submit="checkLogin">
                        <div v-for="field in userInfo" :key="field.id" class="form-field">
                            <!-- For dynamic component -->
                            <!-- @props options: Input fields with Array e.g Checkbox, Radio, Select -->
                            <component
                                :is="fieldType(field.type)"
                                :showLabel="true"
                                :inputData="field" 
                                :modelValue="field.value" 
                                @update:modelValue="field.value = $event"
                                :options="field.option"
                            >
                            </component>
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
import Modal from '@/components/Modals/Modal';
import Input from '@/components/Inputs/Input';
import AlertBox from '@/components/AlertBox';

export default {
    name: 'LoginView',
    components: {
        PrimaryButton,
        Modal,
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
                return console.log('access denied') 
            }
            
            return console.log('access granted')
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