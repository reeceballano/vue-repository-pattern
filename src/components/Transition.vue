<template>
    <transition 
        enter-active-class="transition-opacity delay-150" 
        enter-from-class="opacity-0" 
        enter-to-class="opacity-100" 
        leave-active-class="transition-opacity duration-200" 
        leave-from-class="opacity-100" 
        leave-to-class="opacity-0"
    >
        <slot />
    </transition>
</template>

<script>
export default {
    name: 'Transition'
}
</script>

<style>
</style>