<template>
    <div class="login-layout h-screen">
        <section class="section p-0">
            <div class="custom-container">
                <slot />
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'LoginLayout'
}
</script>

<style>
.login-layout {
    @apply bg-gradient-to-r from-indigo-500 to-indigo-900;
}
</style>