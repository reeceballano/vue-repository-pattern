<template>
    <div class="accordion">
        <ul class="test">
            <li :class="[currentAccordion == i+1 ? 'active' : '']" class="accordion-title flex flex-col" v-for="(acc, i) in registeredchild" :key="i" @click.prevent="changeAccordion(i+1)">
                <div class="title-wrapper">{{ acc.title }}</div>
                <div v-show="currentAccordion == i+1" class="accordion-content-wrapper">
                    {{acc.desc}}
                </div>
            </li>
        </ul>
        <slot />
    </div>
</template>

<script>
import { ref, provide } from 'vue';

export default {
    name: 'Accordion',
    props: {
        activeAccordion: {
            type: Number,
            default: 1
        }
    },
    setup(props) {
        const currentAccordion = ref(props.activeAccordion);
        const changeAccordion = (tab) => {
            currentAccordion.value = tab;
            console.log(currentAccordion.value)
        }

        const registerChild = (child) => registeredchild.value.push(child);
        
        const registeredchild = ref([]);

        provide('tab', { currentAccordion,  registerChild });

        return {
            currentAccordion,
            changeAccordion,
            registeredchild,
        }
    },
}
</script>

<style scoped>
    .accordion-title {
        @apply  cursor-pointer text-left mb-0.5;
    }

    .active .title-wrapper {
        @apply bg-gray-50;
    }

    .title-wrapper {
        @apply px-10 py-3 bg-gray-100;
    }
</style>