<template>
    <div class="box-alert">
        <div class="bg-green-300 p-4 w-full">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'AlertBox',
    props: {
        alertType: {
            type: String,
            default: 'success'
        }
    }
}
</script>

<style>

</style>