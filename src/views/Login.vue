<template>
    <div class="login">
        <section class="section">
            <div class="custom-container">
                <div class="md:w-1/2 mx-auto p-10 rounded shadow-2xl bg-white">
                    <h2 class="text-2xl mb-5">Login</h2>
                    <!-- <small>
                        isLOGGED: {{isLogged}} <hr />
                        LOGIN DETAILS: {{ userLogin }}<hr />
                        USER INPUT: {{ userInfo }}<hr />
                        AUTOCLOSE: {{ autoClose }} 
                    </small> -->
                    <div v-if="isLogged" class="check-session">
                        <Loading  text="Checking Session..." />
                    </div>

                    <div v-if="!isLogged" class="login-form">
                        <AlertBox v-if="autoClose" :alert-type="alertType">
                            Access Denied! {{ alertType }}
                        </AlertBox>
                        <form @submit="checkLogin">
                            <div v-for="field in userInfo" :key="field.id" class="form-field">
                                <!-- For dynamic component -->
                                <!-- @props options: Input fields with Array e.g Checkbox, Radio, Select -->
                                <component
                                    :is="fieldType(field.type)"
                                    :showLabel="true"
                                    :inputData="field" 
                                    v-model="field.value"
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
            </div>
        </section>
    </div>
</template>

<script>

import { ref, reactive, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { fieldType } from '../common/fieldType';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Input from '@/components/Inputs/Input';
import AlertBox from '@/components/AlertBox';
import Loading from '@/components/Loading';

export default {
    name: 'LoginView',
    components: {
        PrimaryButton,
        Input,
        AlertBox,
        Loading
    },

    setup() {
        const store = useStore();

        const router = useRouter();

        const isLogged = computed(() => {
            return store.getters['login/getIsLogged'];
        })

        const alertType = computed(() => {
            if(isLogged.value) {
                return 'success';
            }

            return 'error';
        })

        const autoClose = ref(false);

        const userInfo = reactive([
            { id: 'field-email', type: 'email', label: 'Email', value: 'superuser@locahost.dev' },
            { id: 'field-password', type: 'password', label: 'Password', value: '1234' },
        ])

        /**
         * TEMP USER DATA
         */
        const userLogin = {
            email: 'superuser@locahost.dev',
            password: '1234'
        }

        /**
         * TODO
         * - check if valid email
         * - add error class
         * - add message box
         */

        const checkLogin = () => {
            const email = userInfo[0].value;
            const password = userInfo[1].value;

            console.log(email, password, userLogin);

            if(!email.length && !password.length) { return console.log('please fill all the required fields') }

            if(email === userLogin.email && password === userLogin.password) { 
                console.log('access granted',password, password);
                store.dispatch('login/login', true);
            } else {
                console.log('access denied',email, password); 
                store.dispatch('login/login', false);
                autoCloseAlert();
            }
        }

        const autoCloseAlert = () => {
            autoClose.value = true;
            setTimeout(() => {
                autoClose.value = false;
            },3000)
        }

        watch(isLogged, () => {
            console.log('watching isLogged', isLogged.value)
            if(isLogged.value || !isLogged.value) {
                autoCloseAlert();
                // CHECK IF LOGGED IS TRUE, THEN REDIRECT TO PREVIOUS PAGE
                if(isLogged.value) { 
                    setTimeout(() => {
                        router.back() 
                    },2000)
                }
            }
        })

        return {
            userInfo,
            fieldType,
            userLogin,
            checkLogin,
            isLogged,
            alertType,
            autoClose
        }
    }
}
</script>
