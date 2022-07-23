<template>
    <section class="cta-section bg-purple-800">
        <div class="custom-container">
            <h2 class="text-white">
                Stay in the loop!
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
    }
}
</script>

<style scoped lang="scss">

    .intro-text {
        h2 {
            @apply text-center text-center md:text-4xl text-2xl leading-10;
        }
    }
</style>