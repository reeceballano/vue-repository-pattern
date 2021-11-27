const fieldType = (type) => {
    if(type == 'text' || type == 'email' || type == 'password' || type == 'address' || type == 'number') {
        return 'Input';
    }

    if(type == 'select') {
        return 'Select';
    }

    if(type == 'radio') {
        return 'Radio';
    }

    if(type == 'checkbox') {
        return 'Checkbox';
    }

    if(type == 'textarea') {
        return 'Textarea';
    }
}

export {
    fieldType
}