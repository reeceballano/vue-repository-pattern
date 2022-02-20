const resetState = (state) => {
    const newState = state;
    setTimeout(() => {
        newState.value = null;
        return newState;
    }, 3000)
}

export default resetState;