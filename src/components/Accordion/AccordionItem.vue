<template>
    <div v-show="accordion == currentAccordion" class="accordion-content">
        <slot />
    </div>
</template>

<script>
import { inject, computed } from 'vue';

export default {
    name: 'AccordionItem',
    props: {
        accordionIndex: {
            type: Number
        }
    },
    setup(props, context) {
        const accordion = computed(() => { return props.accordionIndex});

        const { currentAccordion, registerChild } = inject('tab');

        const childAttributes = context.attrs;

        registerChild(childAttributes)


        return {
            accordion,
            currentAccordion,
        }
    },
}
</script>

<style>

</style>