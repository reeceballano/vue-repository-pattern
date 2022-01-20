<template>
    <div class="box-alert">
        <div class="custom-container">
            <div class="bg-green-300">
                <slot />
            </div>
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