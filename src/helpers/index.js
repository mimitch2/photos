/* eslint-disable import/prefer-default-export */
const get = ({ object, key, defaultValue = undefined }) => {
    return object[key] || defaultValue;
};

export { get };
