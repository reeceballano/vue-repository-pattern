// RETURN BOOLEAN

const checkValue = (data, val) => {
    if(data.find((str) => str === val)) {
        return true;
    }

    return false;
}

export {
    checkValue
}