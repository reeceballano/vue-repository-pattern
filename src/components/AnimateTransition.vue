<template>
    <transition
        :name="name"
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
        @apply opacity-100;
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

    .slidedown-enter-active,
    .slidedown-leave-active {
        @apply transition-all;
    }

    .slidedown-enter-to,
    .slidedown-leave-from {
        @apply overflow-hidden max-h-screen;
    }

    .slidedown-enter-from,
    .slidedown-leave-to {
        @apply overflow-hidden max-h-0;
    }

    .slide-in-enter-active,
    .slide-in-leave-active,
    .slide-out-enter-active,
    .slide-out-leave-active {
        transition: all 1s ease-in-out;
    }
    .slide-in-enter-from {
        transform: translateX(-100%);
    }
    .slide-in-leave-to {
        transform: translateX(100%);
    }
    .slide-out-enter-from {
        transform: translateX(100%);
    }
    .slide-out-leave-to {
        transform: translateX(-100%);
    }
</style>