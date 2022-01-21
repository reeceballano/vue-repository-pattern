<template>
    <div class="box-alert">
        <div class="bg-green-300 p-4 w-full">
            <slot />
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: 'AlertBox',
    props: {
        alertType: {
            type: String,
            default: 'success'
        }
    },

    setup(props) {
        const alert = computed(() => {
            return props.alertType;
        })

        return {
            alert,
        }
    }
}
</script>

<style>

</style>