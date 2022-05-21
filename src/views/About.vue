<template>
    <section class="about">
        <div class="custom-container">
            <h1 class="text-2xl">This is an about page</h1>
            
            <Divider bg="gray" />

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

            <h2 class="text-xl mb-10">Accordion Components *Under Development</h2>

            <Accordion :active-accordion="2">
                <AccordionItem title="DESCRIPTION" :accordion-index="1" desc="this is the description 1" />
                <AccordionItem title="SPECIFICATION" :accordion-index="2" desc="this is the description 2" />
                <AccordionItem title="FEATURES" :accordion-index="3" desc="this is the description 3" />
            </Accordion>

            <h2 class="text-xl my-10">Toggle Components *Under Development</h2>

            <Toggle :set-active="true" title="Description">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </Toggle>

            <Toggle title="Specification">
                <p>Specification content</p>
            </Toggle>

            <Toggle title="Features">
                <p>Features content</p>
            </Toggle>

            <Divider bg="blue" />

            <h2 class="text-xl mb-10">Button Components</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <PrimaryButton @button-click="buttonClick('this is a primary button event')" css-style="bg-blue-400 hover:bg-blue-200">
                    Primary Button
                </PrimaryButton>

                <PrimaryButton route-to="/users" bg="blue" :show-icon="true" css-style="bg-red-400 hover:bg-red-200">
                    Users Page
                </PrimaryButton>

                <PrimaryButton route-to="User" :button-params="{uid:1}" :show-icon="true" css-style="bg-yellow-400 hover:bg-yellow-200">
                    User Page
                </PrimaryButton>

                <PrimaryButton @button-click="buttonClick('Im a <button>')" type="button" :show-icon="true" css-style="bg-green-400 hover:bg-green-200 text-white">
                    I'm a Button
                </PrimaryButton>

                <PrimaryButton @button-click="buttonClick('Im a <button>')" type="button" :show-icon="true">
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
                        <PrimaryButton type="button" @button-click="isVisibleModalOne = !isVisibleModalOne" css-style="bg-blue-400 hover:bg-blue-200">
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
                        <PrimaryButton type="button" @button-click="isVisibleModalTwo = !isVisibleModalTwo" css-style="bg-red-400 hover:bg-red-200">
                            Modal no overlay
                        </PrimaryButton>

                    </template>
                </Modal>
            </div>

            <Divider bg="blue" />

            <h2 class="text-xl mb-10">Alert Components</h2>

            <AlertBox alert-type="success">
                This is a success alert box!
            </AlertBox>

            <AlertBox alert-type="warning">
                This is a warning alert box!
            </AlertBox>

             <AlertBox alert-type="error">
                This is an error alert box!
            </AlertBox>

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
                   
                    <PrimaryButton type="submit" css-style="bg-blue-400 hover:bg-blue-200">
                        Submit
                    </PrimaryButton>
                </form>
            </div>

            <Divider bg="blue" />

            <h2 class="text-xl mb-10">Slider Component</h2>

            <Slider :slides="slides" controls :interval="4000" />
        </div>
        
    </section>
</template>

<script>
import { fieldType } from '../common/fieldType';
import { ref, onMounted } from 'vue';
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
import AlertBox from '@/components/AlertBox';
import Accordion from '@/components/Accordion/Accordion';
import AccordionItem from '@/components/Accordion/AccordionItem';
import Toggle from '@/components/AccordionToggle/Toggle';
import Slider from '@/components/Slider/Slider';

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
        RangeSlider,
        AlertBox,
        Accordion,
        AccordionItem,
        Toggle,
        Slider
    },  
    setup() {
        const slides = ref([
            { id: 1, image: 'https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU' },
            { id: 2, image: 'https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g' },
            { id: 3, image: 'https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc' }
        ])

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

        const fetchCountries = async () => {
            const countArray = [];
            
            try {
                const res = await fetch('https://restcountries.com/v3.1/all');
                const countries = await res.json();
                
                for(let i = 0; i < countries.length; i++) {
                    countArray.push(countries[i].name.common)
                }

            } catch(err) {
                console.log(err)
            }

            console.log(countArray)
        }

        onMounted(() => {
            fetchCountries();
        })

        return {
            tabs,
            buttonClick,
            isVisibleModalOne,
            isVisibleModalTwo,
            onClose,
            userInfo,
            fieldType,
            slides
        }
    },
}
</script>
