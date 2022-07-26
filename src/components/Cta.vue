<template>
    <section class="cta-section bg-purple-800">
        <div class="custom-container">
            <h2 class="text-white">
                {{title}}
            </h2> 
            <div class="flex justify-center items-center my-10 overflow-auto">
                <div class="flex justify-center w-2/4">
                    <Input :inputData="{ id: 'field-email', type: 'email', label: 'Your email', value:'' }"/>
                    <SecondaryButton routeTo="#" type="link" @buttonClick="exploreBtn()" css-style="text-white">
                        Subscribe
                    </SecondaryButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SecondaryButton from '../components/Buttons/SecondaryButton';
import Input from '@/components/Inputs/Input';

export default {
    name: 'Cta',
    components: {
        SecondaryButton,
        Input,
    },
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
    .cta-section {
        h2 {
            @apply text-center text-center md:text-4xl text-2xl leading-10;
        }
    }
</style>