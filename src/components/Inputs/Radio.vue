<template>
    <label v-show="showLabel" for="option1">{{ inputData.label }}</label>
    {{ modelValue }}
    <div v-for="(radio, i) in options" :key="i"  class="radio-container">
        <input 
            :type="inputData.type" 
            :name="radio" 
            :value="radio"
            v-model="picked"
            @change="updateValue($event.target.value)"
            class="primary-input" 
        />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Radio',
    props: {
        inputData: {
            type: Object,
            default: () => {}
        },

        modelValue: {
            type: String
        },

        showLabel: {
            type: Boolean,
            default: false
        },

        options: {
            type: Array
        }
    },

    setup(props, { emit }) {
        const updateValue = (value) => {
            emit('update:modelValue', value);
        }

        const picked = ref(null);
        
        return {
            updateValue,
            picked
        }
    }
}
</script>

<style>

</style>