<template>
    <img :src="imgSrc" :class="cssStyle" class="image" />
</template>

<script>
export default {
    name: 'Image',
    props: {
        imgSrc: {
            type: String
        },
        cssStyle: {
            type: String
        }
    }
}
</script>

<style scoped>

</style>
