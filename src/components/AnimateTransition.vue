<template>
    <transition
        name="fade"
    >
        <slot />
    </transition>
</template>

<script>
export default {
    name: 'AnimateTransition',
    props: {
        name: {
            type: String,
            default: 'fade'
        }
    }
}
</script>

<style>
    .fade-enter-active {
        @apply transition-opacity delay-150;
    }

    .fade-enter-from {
        @apply opacity-0;
    }

    .fade-enter-to {
        @apply opacity-0;
    }

    .fade-leave-active {
        @apply transition-opacity duration-200;
    }

    .fade-leave-from {
        @apply opacity-0;
    }

    .fade-leave-to {
        @apply opacity-0;
    }
</style>