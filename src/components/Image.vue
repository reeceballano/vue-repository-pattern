<template>
    <img :src="imgSrc" class="image" />
</template>

<script>
export default {
    name: 'Image',
    props: {
        imgSrc: {
            type: String
        },
        style: {
            type: String
        }
    }
}
</script>

<style scoped>

</style>
