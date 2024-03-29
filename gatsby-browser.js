/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable global-require */
// polyfill for image sharp on safari
exports.onClientEntry = () => {
    // NOTE: Don't polyfill Promise here (Gatsby already includes a Promise polyfill)

    // IntersectionObserver polyfill for gatsby-image (Safari, IE)
    if (typeof window.IntersectionObserver === 'undefined') {
        require('intersection-observer');
        console.log('👍 IntersectionObserver is polyfilled');
    }

    // Object-fit/Object-position polyfill for gatsby-image (IE)
    const testImg = document.createElement('img');
    if (
        typeof testImg.style.objectFit === 'undefined'
      || typeof testImg.style.objectPosition === 'undefined'
    ) {
        require('object-fit-images')();
        console.log('👍 Object-fit/Object-position are polyfilled');
    }
};
