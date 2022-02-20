import { ref, toRef } from 'vue';

const resetState = (state) => {
    const newState = ref(state);
    setTimeout(() => {
        newState.value = null;
        return toRef(newState);
    }, 3000)
}

export default resetState;