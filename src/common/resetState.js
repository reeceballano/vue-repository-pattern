/**
 * 
 * @param state 
 * only ref property; reactive property cannot set to null
 */
const resetState = (state, cb) => {
    const newState = state;
    setTimeout(() => {
        newState.value = null;
        console.log('reset')
        if(typeof cb === 'function') {
            console.log('cb')
            cb();
        }
    }, 3000)
}

export default resetState;