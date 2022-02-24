<template>
    <div class="accordion">
        <ul class="flex justify-start md:flex-row flex-col">
            <li class="accordion-title">
                Accordion 1
            </li>
            <li class="accordion-title">
                Accordion 2
            </li>
            <li class="accordion-title">
                Accordion 3
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .accordion-title {
        @apply px-10 py-3 bg-gray-100 cursor-pointer flex justify-around items-center;
    }

    .active {
        @apply bg-white border-b;
    }
</style>