<template>
    <div class="select-container">
        <label v-show="showLabel" class="block mb-2">{{inputData.label}}</label>
        <select 
            :name="inputData.name"
             @change="updateValue($event.target.value)" 
        >
            <option v-for="(option,i) in options" :key="i" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

<script>

export default {
    name: 'Select',
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
        return {
            updateValue
        }
    }
}
</script>

<style>

</style>