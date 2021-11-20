<template>
    <div class="form-field">
        <input type="text" class="border border-gray-50" />
    </div>
</template>

<script>
export default {
    name: 'PrimaryInput',
    props: {
        placeholder: {
            type: String
        }
    }
}
</script>