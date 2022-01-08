<template>
    <div class="login">
        <section class="section">
            <div class="custom-container">
                <div class="md:w-1/2 mx-auto h-full">
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
                    
                        <PrimaryButton type="submit" bg="blue">
                            Submit
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
import Divider from '@/components/Divider';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Modal from '@/components/Modals/Modal';
import Input from '@/components/Inputs/Input';
import Textarea from '@/components/Inputs/Textarea';
import Checkbox from '@/components/Inputs/Checkbox';
import Select from '@/components/Inputs/Select';
import Radio from '@/components/Inputs/Radio';
import RangeSlider from '@/components/Inputs/RangeSlider';

export default {
    name: 'LoginView',
    components: {
        Divider,
        PrimaryButton,
        Modal,
        Input,
        Textarea,
        Checkbox,
        Select,
        Radio,
        RangeSlider
    },

    setup() {
        const userInfo = ref([
            { id: 'field-name', type: 'text', label: 'Name', value:'' },
            { id: 'field-email', type: 'email', label: 'Email', value: '' },
            { id: 'field-password', type: 'password', label: 'Password', value: '' },
            { id: 'field-message', type: 'textarea', label: 'Message', value:'' },
            { id: 'field-checkbox', type: 'checkbox', label: 'Position', value:[], option:['Developer', 'Designer', 'DevOp'] },
            { id: 'field-select', type: 'select', label: 'Salary Expectation', value:'', option:['50000-70000', '70000-90000', '90000-120000'] },
            { id: 'field-radio', type: 'radio', label: 'Experience', value:'', option:['Junior', 'Mid', 'Senior'] },
            { id: 'field-range-slider', type: 'range', label:'Annual Income', value: [], option:[1000,5000] }
        ])

        return {
            userInfo,
            fieldType,
        }
    }
}
</script>

<style>

</style>