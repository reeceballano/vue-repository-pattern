<template>
    <label class="block mb-2">{{inputData.label}}</label>
    {{inputData.value}}
    <div class="toggle mb-12 mr-8 flex justify-around py-1.5 h-px[2500]">
        <div v-for="(option,i) in options" :key="i" >
            <label class="flex items-center cursor-pointer">
                <div class="relative">
                    <input
                        v-model="collectedValues"
                        :name="inputData.name"
                        :value="option" 
                        @change="updateValue($event.target.value)"  
                        type="checkbox" 
                        class="sr-only" 
                    />
                    <!-- line -->
                    <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                    <!-- dot -->
                    <div :class="checkValue(option) ? 'inputCheck' : ''" class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                </div>
                <!-- label -->
                <div class="ml-3 text-gray-700 font-medium">
                    {{ option }} {{checkValue(option)}}
                </div>
            </label>
        </div>    
    </div>
</template>

<script>
    /**
     * TODO
     * - check if checkbox has value on initial page load
     */
    import { ref } from 'vue';

    export default {
        name: 'SwitchToggle',

        props: {
            inputData: {
                type: Object,
                default: () => {}
            },
            modelValue: {
                type: Array
            },
            options: {
                type: Array
            }
        },
        
        setup(props, { emit }) {
            // CHECK IF CHECKBOX HAS VALUE
            console.log(props.inputData.value);
            const checkValue = (val) => {
                if(props.inputData.value.find((str) => str === val)) {
                    return true;
                }

                return false;
            }

            // ASSIGN A MODEL FOR THE REFERENCE
            const collectedValues = ref([]);

            const updateValue = () => {
                // WE NEED TO MAP THE VALUES IN THE collectedValues ref
                emit('update:modelValue', collectedValues.value);
            }

            return {
                updateValue,
                collectedValues,
                checkValue
            }
        }
    }
</script>

<style scoped>
    .inputCheck,
    input:checked ~ .dot {
        transform: translateX(100%);
        background-color: #12c0f0;
    }
</style>