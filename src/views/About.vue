<template>
    <section class="about">
        <div class="custom-container">
            <h1 class="text-2xl">This is an about page</h1>
            
            <Divider bg="blue" />

            <h2 class="text-xl mb-10">Tab Components</h2>

            <Tabs>
                <TabItem v-for="(tab,i) in tabs" icon="MoonIcon" :title="tab.title" :tab-index="i+1" :key="tab.id">{{ tab.content }}</TabItem>
            </Tabs>

            <Tabs :active-tab="2">
                <TabItem title="DESCRIPTION" icon="MenuAlt1Icon" :tab-index="1">this is the description</TabItem>
                <TabItem title="SPECIFICATION" icon="MenuAlt2Icon" :tab-index="2">this is the specification</TabItem>
                <TabItem title="FEATURES" icon="MenuAlt3Icon" :tab-index="3">this is the features</TabItem>
            </Tabs>

            <Divider bg="blue" />

            <h2 class="text-xl mb-10">Button Components</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <PrimaryButton @button-click="buttonClick('this is a primary button event')" bg="green">
                    Primary Button
                </PrimaryButton>

                <PrimaryButton route-to="/users" bg="blue" :show-icon="true">
                    Users Page
                </PrimaryButton>

                <PrimaryButton route-to="User" :button-params="{uid:1}" bg="red" :show-icon="true">
                    User Page
                </PrimaryButton>

                <PrimaryButton @button-click="buttonClick('Im a <button>')" type="button" bg="yellow" :show-icon="true">
                    I'm a Button
                </PrimaryButton>
            </div>

            <Divider bg="blue" />

            <h2 class="text-xl mb-10">Modal Components</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Modal :visible="isVisibleModalOne" @close-modal="isVisibleModalOne = false">
                    <template #modalTitle>
                        Modal 1 Title
                    </template>
                    <template #modalContent>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Suscipit minima praesentium natus non, quas dolores vitae magnam? 
                        Earum dolorum perferendis officia totam commodi. 
                        Beatae, incidunt molestias eius dolor reprehenderit placeat?
                    </template>
                    <template #modalButton>
                        <PrimaryButton type="button" @button-click="isVisibleModalOne = !isVisibleModalOne" bg="green">
                            Show Modal 1
                        </PrimaryButton>

                    </template>
                </Modal>

                <Modal :overlay="false" :visible="isVisibleModalTwo" @close-modal="isVisibleModalTwo = false" @on-close="onClose">
                    <template #modalTitle>
                        Modal no overlay
                    </template>
                    
                    <template #modalContent>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Suscipit minima praesentium natus non, quas dolores vitae magnam? 
                        Earum dolorum perferendis officia totam commodi. 
                        Beatae, incidunt molestias eius dolor reprehenderit placeat?
                    </template>

                    <template #modalButton>
                        <PrimaryButton type="button" @button-click="isVisibleModalTwo = !isVisibleModalTwo" bg="red">
                            Modal no overlay
                        </PrimaryButton>

                    </template>
                </Modal>
            </div>

            <Divider bg="blue" />

            <h2 class="text-xl mb-10">Input Components</h2>

            <div class="grid grid-cols-1 gap-4">
                {{ userInfo }}
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
</template>

<script>
import { fieldType } from '../common/fieldType';
import { ref } from 'vue';
import Tabs from '@/components/Tab/Tabs';
import TabItem from '@/components/Tab/TabItem';
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
    name: 'About',
    components: {
        Tabs,
        TabItem,
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
        const tabs = ref([
            { id: 1, title: 'Tab 1', content: 'content for tab 1' },
            { id: 1, title: 'Tab 2', content: 'content for tab 2' },
            { id: 1, title: 'Tab 3', content: 'content for tab 3' },
        ])

        const buttonClick = (e) => {
            console.log(e);
        }

        const isVisibleModalOne = ref(false);
        const isVisibleModalTwo = ref(false);

        const onClose = () => {
            console.log('on close callback');
        }

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
            tabs,
            buttonClick,
            isVisibleModalOne,
            isVisibleModalTwo,
            onClose,
            userInfo,
            fieldType,
        }
    },
}
</script>
