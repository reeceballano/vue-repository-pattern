const fieldType = (type, component) => {
    if(type == 'text' || type == 'email' || type == 'password' || type == 'address' || type == 'number') {
        return component;
    }

    if(type == 'select') {
        return component;
    }

    if(type == 'radio') {
        return component;
    }

    if(type == 'checkbox') {
        return component;
    }
}

export {
    fieldType
}