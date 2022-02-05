<template>
    <AnimateTransition>
        <div class="box-alert">
            <div :class="`bg-${alert}-400`" class="p-4 w-full mb-5">
                <slot />
            </div>
        </div>
    </AnimateTransition>    
</template>

<script>
import { computed } from 'vue';
import AnimateTransition from '@/components/AnimateTransition';

export default {
    name: 'AlertBox',
    components: {
        AnimateTransition
    },
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