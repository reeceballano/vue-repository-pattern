<template>
    <div class="toggle flex items-center justify-center w-full mb-12">
        <label class="flex items-center cursor-pointer">
            <div class="relative">
                <input type="checkbox" />
                <!-- line -->
                <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <!-- dot -->
                <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
            <!-- label -->
            <div class="ml-3 text-gray-700 font-medium">
            Toggle Me!
            </div>
        </label>
    </div>
</template>

<script>

</script>

<style scoped>

</style>