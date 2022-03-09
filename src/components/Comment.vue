<template>
    <div class="comment-item m-5 border-b pb-5">
        {{ data }}
        <strong>{{ data.comment.author }}</strong>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Comment',
    props: {
        comment: {
            type: Object,
            default: () => {}
        }
    },

    async setup(props) {
        const data = ref(props);

        return {
            data
        }
    }

}
</script>

<style>

</style>