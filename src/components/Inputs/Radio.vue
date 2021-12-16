<template>
    <div class="radio-container">
        <label for="option1">Option 1</label>
        <input type="radio" name="option1" value="option 1" />
        <label for="option2">Option 2</label>
        <input type="radio" name="option1" value="option 1" />
        <label for="option3">Option 3</label>
        <input type="radio" name="option3" value="option 3" />
    </div>
</template>

<script>
export default {
    name: 'Radio',
    props: {
        inputData: {
            type: Object,
            default: () => {}
        },
    }
}
</script>

<style>

</style>