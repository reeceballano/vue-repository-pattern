const closeComponent = (el) => {
    const closeEl = document.querySelector(el);

    if(closeEl) {
        closeEl.style.display = 'none';
    }
}

export {
    closeComponent,
}