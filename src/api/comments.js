import { reactive, toRefs } from 'vue';

export default function() {
    let state = reactive({
        comments: [],
    });

    async function fetchComments() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        const res = await response.json();
        return state.comments = res;
    }

    return {
        ...toRefs(state),
        fetchComments
    }
}