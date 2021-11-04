<template>
    <router-link 
        :to="{ name:routeTo, params: buttonParams }"
        class="bg-indigo-100 text-indigo-700 text-base font-semibold px-6 py-2 rounded-lg hover:bg-indigo-400 delay-150 hover:transition-all">
        <slot />
        <Icon icon="MenuAlt2Icon" class="h-5 w-5 mr-2 text-blue-500"/>
    </router-link>
</template>

<script>
import Icon from '@/components/Icon';

export default {
    name: 'PrimaryButton',
    props: {
        routeTo: {
            type: String
        },

        buttonParams: {
            type: Object,
            default: () => {}
        }
    },
    components: {
        Icon,
    }
}
</script>

<style>

</style>