<template>
    <section class="cta-section bg-purple-800">
        <div class="custom-container">
            <h2 class="text-white">
                {{title}}
            </h2>
            <p class="text-center text-white mt-5">
                <slot />
            </p> 
            <div class="flex justify-center items-center my-10 overflow-auto">
                <div class="flex justify-center w-2/4">
                    <input 
                        type="email"
                        @input="ctaInput($event.target.value)" 
                        class="primary-input mb-0" 
                        placeholder="Enter your email" 
                    />
                    <SecondaryButton routeTo="#" type="link" @buttonClick="ctaSubmit()" css-style="text-white">
                        Subscribe
                    </SecondaryButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SecondaryButton from '../components/Buttons/SecondaryButton';

export default {
    name: 'Cta',
    components: {
        SecondaryButton,
    },
    props: {
        inputData: {
            type: Object
        },

        title: {
            type: String,
            required: true
        },

    },

    setup(props, { emit }) {
        const ctaInput= (value) => {
            emit('update', value);
        }

        const ctaSubmit = () => {
            emit('ctaSubmit');
        }

        return {
            ctaInput,
            ctaSubmit
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

    .primary-input {
        margin-bottom: 0 !important;
    }

</style>