<template>
    <div :class="headerType" class="main-hero">
        <div class="custom-container">
            <div class="md:flex">
                <div class="md:w-2/5 flex flex-col justify-center">
                    <h1>
                        Gathering moving cattle divide seas. 
                    </h1>

                    <h2>
                        Firmament earth moving is is third saw whales. Our. Fruit moved rule living our two itself blessed appear two man.
                    </h2>
                </div>
                <div class="md:w-3/5">
                    <img :src="heroImg" />
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: 'Hero',

    props: {
        header: {
            type: String
        }
    },

    setup(props) {
        const heroImg = computed(() => {
            return require(`./../../assets/hero-img.jpg`);
        })

        const headerType = computed(() => {
            return props.header;
        })

        return {
            heroImg,
            headerType
        }
    }
}
</script>

<style scoped lang="scss">
    .main-hero {
        background: #eeeff3;

        h1 {
            @apply md:text-5xl text-gray-800 uppercase leading-tight font-extrabold;
        }

        h2 {
            @apply md:text-2xl font-thin text-gray-600 my-10;
        }
    }

    .custom-container {
        @apply md:h-auto h-full md:py-24 py-14;
    }
</style>