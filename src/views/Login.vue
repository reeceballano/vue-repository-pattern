<template>
    <div class="login">
        <section class="section">
            <div class="custom-container">
                <div class="h-full md:w-1/2 mx-auto p-10 rounded shadow-2xl bg-white">
                    <h2 class="text-2xl mb-5">Login</h2>
                    <form>
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

                            

                            <!-- For Single component
                            <Textarea 
                                v-if="field.type == 'textarea'"
                                :showLabel="false"
                                :inputData="field" 
                                :modelValue="field.value" 
                                @update:modelValue="field.value = $event"
                            />
                            <Input 
                                v-if="field.type != 'textarea'"
                                :showLabel="false"
                                :inputData="field" 
                                :modelValue="field.value" 
                                @update:modelValue="field.value = $event"
                            />
                            -->
                        </div>
                    
                        <PrimaryButton type="submit" css-style="bg-blue-500 hover:bg-blue-200 mt-5">
                            Login
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { fieldType } from '../common/fieldType';
import { ref } from 'vue';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Modal from '@/components/Modals/Modal';
import Input from '@/components/Inputs/Input';

export default {
    name: 'LoginView',
    components: {
        PrimaryButton,
        Modal,
        Input,
    },

    setup() {
        const userInfo = ref([
            { id: 'field-email', type: 'email', label: 'Email', value: '' },
            { id: 'field-password', type: 'password', label: 'Password', value: '' },
        ])

        return {
            userInfo,
            fieldType,
        }
    }
}
</script>

<style>
.login-layout {
    @apply bg-gradient-to-r from-indigo-500 to-indigo-900;
}
</style>