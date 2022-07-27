<template>
    <div class="form-field">
        <label v-show="label" :for="name" class="block mb-2">{{placeholder}}</label>
        <textarea 
            v-if="type == 'textarea'" 
            class="primary-input" 
            :name="name" 
            :type="type" :value="modelValue" 
            @input="updateValue($event.target.value)"
            :placeholder="(label) ? '' : placeholder"
        >
        </textarea>

        <input v-if="type == 'text' || type == 'password' || type == 'email' || type == 'input' " 
            :name="name"
            :type="type" 
            :value="modelValue" 
            @input="updateValue($event.target.value)" 
            class="primary-input" 
            :placeholder="(label) ? '' : placeholder" 
        />
    </div>
</template>

<script>
export default {
    name: 'PrimaryInput',
    props: {
        placeholder: {
            type: String
        },

        name: {
            type: String
        },

        type: {
            type: String,
            default: 'text'
        },

        modelValue: {
            type: String,
            default: ''
        },

        label: {
            type: Boolean,
            default: false
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

<style scoped>

</style>