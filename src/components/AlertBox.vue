<template>
    <div class="box-alert">
        <div :class="`bg-${alert}-400`" class="p-4 w-full mb-5">
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
            const aType = props.alertType;
            if(aType === 'success') return 'green';
            if(aType === 'warning') return 'yellow';
            if(aType === 'error') return 'red';
            return 'gray';
        })

        return {
            alert,
        }
    }
}
</script>

<style>

</style>