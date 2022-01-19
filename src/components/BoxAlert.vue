<template>
    <div class="box-alert">
        <div class="custom-container">
            <div>
                {{ msg }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BoxAlert',
    props: {
        msg: {
            type: String,
        },

        alertType: {
            type: String,
            default: 'success'
        }
    }
}
</script>

<style>

</style>