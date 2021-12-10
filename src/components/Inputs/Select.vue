<template>
    <div class="select-container">
        <select>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
            <option value="">Option 5</option>
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
            type: Array
        },

        showLabel: {
            type: Boolean,
            default: false
        },
    }
}
</script>

<style>

</style>