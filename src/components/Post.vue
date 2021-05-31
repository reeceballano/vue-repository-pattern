<template>
    <div class="post-item">
        {{ post.title }}
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: {
        post: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style>
    .post-item {
        border-bottom: 1px solid #acacac;
        padding: 20px 10px;
    }
</style>