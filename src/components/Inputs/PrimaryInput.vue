<template>
    <div class="form-field">
        <label v-show="label" :for="name" class="block mb-2">{{placeholder}}</label>
        <textarea 
            v-if="type == 'textarea'" 
            class="primary-input" 
            :name="name" 
            :type="type" :value="modelValue" 
            @input="updateValue($event.target.value)"
            :placeholder="placeholder" 
        >
        </textarea>

        <input v-else 
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
    .form-field {
        @apply mb-3;
    }
    .primary-input {
        @apply bg-gray-100 w-full px-4 py-3 ring-2 ring-gray-100 mb-1
                hover:bg-white focus-within:bg-white focus:outline-none transition-colors;
    }
</style>