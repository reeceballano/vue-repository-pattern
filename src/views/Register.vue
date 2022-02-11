<template>
    <div class="register">
        <section class="section">
            <div class="custom-container">
                <div class="md:w-1/2 mx-auto p-10 rounded shadow-2xl bg-white">
                    <h2 class="text-2xl mb-5">Register</h2>
                    USER INPUT: {{ userInfo }}
                    <form>
                        <div v-for="field in userInfo" :key="field.id" class="form-field">
                            <component
                                :is="fieldType(field.type)"
                                :showLabel="true"
                                :inputData="field" 
                                @update:modelValue="field.value = $event"
                                :options="field.option"
                            >
                            </component>
                        </div>

                        <PrimaryButton @button-click="register()" type="submit" css-style="disabled-btn bg-blue-500 hover:bg-blue-200 mt-5 text-white">
                            Register
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
import { reactive } from 'vue';
import { fieldType } from '../common/fieldType';
import Input from '@/components/Inputs/Input';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

export default {
    name: 'Register',
    components: {
        Input,
        PrimaryButton
    },

    setup() {
        const userInfo = reactive([
            { id: 'field-email', type: 'email', label: 'Email', value: 'superuser@locahost.dev' },
            { id: 'field-name', type: 'text', label: 'Name', value: 'superman' },
            { id: 'field-password', type: 'password', label: 'Password', value: '1234' },
            { id: 'field-password-repeat', type: 'password', label: 'Repeat Password', value: '1234' },
        ])

        const register = () => {
            console.log('register');
        }

        const verifyPassword = () => {

        }

        return {
            userInfo,
            fieldType,
            verifyPassword,
            register
        }
    }

}
</script>

<style scoped>
    section {
        @apply pb-0;
    }
</style>
