/**
 * 
 * @param state 
 * only ref property; reactive property cannot set to null
 */
const resetState = (state, cb) => {
    const newState = state;
    setTimeout(() => {
        newState.value = null;
        if(typeof cb === 'function') {
            cb();
        }
    }, 3000)
}

export default resetState;