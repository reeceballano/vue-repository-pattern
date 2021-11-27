const fieldType = (type) => {
    switch(type) {
        case 'text':
        case 'email':
        case 'password':
        case 'address':
        case 'number':
            return 'Input';
        
        case 'select':
            return 'Select';

        case 'radio':
            return 'radio';

        case 'checkbox':
            return 'Checkbox';
            
        case 'textarea':
            return 'Textarea';
    }
}

export {
    fieldType
}