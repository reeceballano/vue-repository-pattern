import { reactive, toRefs } from 'vue';

export default function() {
    let state = reactive({
        comments: [],
    });

    const fetchComments = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        const res = await response.json();
        state.comments = res;
    }

    return {
        ...toRefs(state),
        fetchComments
    }
}