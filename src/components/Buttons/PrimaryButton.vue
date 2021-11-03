<template>
    <router-link 
        :to="{ name:routeTo, params: buttonParams }"
        class="bg-indigo-100 text-indigo-700 text-base font-semibold px-6 py-2 rounded-lg hover:bg-indigo-400 delay-150 hover:transition-all">
        <slot />
    </router-link>
</template>

<script>
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
    }
}
</script>

<style>

</style>