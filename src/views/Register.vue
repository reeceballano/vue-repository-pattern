<template>
    <div class="register">
        <section class="section">
            <div class="custom-container">
                <div class="md:w-1/2 mx-auto p-10 rounded shadow-2xl bg-white">
                    <h2 class="text-2xl mb-5">Register</h2>
                    <AlertBox v-if="isRegistered != null" :alert-type="(isRegistered) ? 'success': 'error'">
                        <span v-if="isRegistered">Success! Registered Successfully!</span>
                        <span v-else>Please fill all the required fields!</span>
                    </AlertBox>
                    <form>
                        <div v-for="field in userInfo" :key="field.id" class="form-field">
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

                        <PrimaryButton 
                            :disabled="!verifyPassword" 
                            @button-click="register()" 
                            type="submit" 
                            :css-style="(verifyPassword) ? 'bg-blue-500 hover:bg-blue-200 mt-5 text-white' : 'bg-gray-300 b-1 disabled-btn'"
                        >
                            Register
                        </PrimaryButton>

                        <PrimaryButton 
                            type="link" 
                            route-to="/" 
                            css-style="bg-red-400 hover:bg-red-200 mt-5 ml-3 text-white"
                        >
                            Cancel
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// prettier-ignore	
import { ref, reactive, computed, watch } from 'vue';
import { fieldType } from '@/common/fieldType';
import Input from '@/components/Inputs/Input';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import AlertBox from '@/components/AlertBox';
import resetState from '@/common/resetState';

export default {
    name: 'Register',
    components: {
        Input,
        PrimaryButton,
        AlertBox
    },

    setup() {
        const isRegistered = ref(null);
        
        const userInfo = reactive([
            { id: 'field-email', type: 'email', label: 'Email', value: 'superuser@locahost.dev' },
            { id: 'field-name', type: 'text', label: 'Name', value: 'superman' },
            { id: 'field-password', type: 'password', label: 'Password', value: '1234' },
            { id: 'field-password-repeat', type: 'password', label: 'Repeat Password', value: '1234' },
        ])

        const register = () => {
            // LOOP ALL FIELDS AND CHECK VALUES

            let countInvalid = 0;

            const isValid = (val) => {
                if(val) { return isRegistered.value = true; } 
                return isRegistered.value = false;
            }

            for(let i = 0; i < userInfo.length; i++) {
                if(userInfo[i].value.length == 0 ) { countInvalid++; }
                if(countInvalid >= 1) { isValid(false) }
                if(countInvalid == 0) { isValid(true) }
            }
        }

        const verifyPassword = computed(() => {
            if(userInfo[2].value != userInfo[3].value || 
                userInfo[2].value.length == 0 || 
                userInfo[3].value.length == 0) { 
                    return false; 
            }
            return true;
        })

        watch(isRegistered, () => {
            resetState(isRegistered);
        })

        return {
            userInfo,
            fieldType,
            verifyPassword,
            register,
            isRegistered
        }
    }

}
</script>

<style scoped>
    section {
        @apply pb-0;
    }
</style>
