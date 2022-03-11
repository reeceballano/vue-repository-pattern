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
        transition: max-height 0.5s ease-in-out;
    }

    .slidedown-enter-to,
    .slidedown-leave-from {
        overflow: hidden;
        max-height: 1000px;
    }

    .slidedown-enter-from,
    .slidedown-leave-to {
        @apply overflow-hidden max-h-0;
    }
</style>